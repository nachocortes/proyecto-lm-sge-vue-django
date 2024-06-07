<script setup>
import 'v-calendar/style.css';
import { ref, provide, watchEffect } from 'vue';
import { useScreens } from 'vue-screen-utils';
import { useCalendarioItemStore } from "@/stores/calendarioItems.js";
import MiBotoneraNumeroMesesVer from "@/components/calendario/calendarioComponentes/CalendarBotonNumMeses.vue";
import MiDarkMode from "@/components/calendario/calendarioComponentes/CalendarioDarkMode.vue";
import CalendarioSelectorUsuario from "@/components/calendario/calendarioVer/CalendarioSelectorUsuario.vue";
import {
    laborables,
    festivos,
    vacaciones,
    ilt,
    libreDisposicion,
    ausenciasJustificadas,
    ausenciasSinJustificadas,
    otros,
    totales,
    sumarDia,
    restarDia
} from '@/utils/contadorDias.js';

const calendarioItems = useCalendarioItemStore();

const { mapCurrent } = useScreens({
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
});

const expanded = mapCurrent({ lg: true }, true);
const isDark = ref(true);
const calendar = ref(null);
const mesesVerBotones = ref(1);
const columns = ref(1);
const rows = ref(1);
const tipoDia = ref("Laborables");
const miCalendario = ref(null);
const calendarioId = ref(0);
const calendarioUrl = ref("");
const calendariohighlight = ref("");
const calendarioEmpleadoNombre = ref("");
const calendarAttrs = ref([]);
const fechasSeleccionadas = ref([]);
const tipoDia_fechaList = ref([]);

const tipoDia_colorMap = {
    'Laborables': "blue",
    'Festivos': 'red',
    'Vacaciones': 'yellow',
    'ILT': 'green',
    'Libre disposicion': 'orange',
    'Ausencias justificadas': 'purple',
    'Ausencias sin justificar': 'gray',
    'Otros': 'pink',
};

function updateCalendario(newCalendario) {
    miCalendario.value = newCalendario;
    calendarioId.value = newCalendario.id;
    calendarioUrl.value = newCalendario.url;
    calendariohighlight.value = newCalendario.highlight;
    calendarioEmpleadoNombre.value = newCalendario.empleado.nombre;

    cargarDiasSeleccionados(newCalendario.id);
}

function moverAHoy() {
    calendar.value.move(new Date());
}

watchEffect(() => {
    if (mesesVerBotones.value === 4) {
        columns.value = 2;
        rows.value = 2;
    } else if (mesesVerBotones.value === 6) {
        columns.value = 3;
        rows.value = 3;
    } else if (mesesVerBotones.value === 12) {
        columns.value = 3;
        rows.value = 4;
    } else if (mesesVerBotones.value === 24) {
        columns.value = 3;
        rows.value = 8;
    } else {
        columns.value = mesesVerBotones.value;
        rows.value = 1;
    }
});

async function cargarDiasSeleccionados(calendarioId) {
    if (!calendarioId) return;

    try {
        await calendarioItems.fetchItemsByCalendario(calendarioId);
        const items = calendarioItems.items;

        fechasSeleccionadas.value = [];
        calendarAttrs.value = [];
        tipoDia_fechaList.value = [];

        items.forEach(item => {
            const date = new Date(item.fecha);
            fechasSeleccionadas.value.push({
                dates: date,
                highlight: {
                    color: tipoDia_colorMap[item.tipo_dia],
                    backgroundColor: tipoDia_colorMap[item.tipo_dia],
                    borderRadius: '50%',
                },
            });

            tipoDia_fechaList.value.push({ fecha: item.fecha, tipoDia: item.tipo_dia });
            sumarDia(item.tipo_dia);
        });

        calendarAttrs.value = fechasSeleccionadas.value.map(attr => ({
            key: `highlight-${attr.dates.toISOString().split('T')[0]}`,
            ...attr,
        }));
    } catch (error) {
        console.error("Error al cargar días seleccionados:", error);
    }
}

function limpiar() {
    isDark.value = true;
    mesesVerBotones.value = 1;
    columns.value = 1;
    rows.value = 1;
    tipoDia.value = "Laborables";
    miCalendario.value = null;
    calendarioUrl.value = "";
    calendariohighlight.value = "";
    calendarAttrs.value = [];
    fechasSeleccionadas.value = [];
    tipoDia_fechaList.value = [];
}
</script>

<template>
    <div class="row mt-3">
        <div class="col-9 text-center">
            <div class="row">
                <div class="col-10 d-flex justify-content-center mt-2">
                    <MiBotoneraNumeroMesesVer @update:numeroMeses="mesesVerBotones = $event" />
                </div>
                <div class="col-2 text-center mt-3">
                    <MiDarkMode @update:modoOscuro="isDark = $event" />
                </div>
            </div>
            <VCalendar class="my-5"
                       :columns="columns"
                       :rows="rows"
                       :is-dark="isDark"
                       :attributes="calendarAttrs"
                       ref="calendar">
                <template #footer>
                    <div class="w-full px-4 pb-3 items-center">
                        <button class="diaActual bg-secondary hover:bg-blue text-white w-full px-3 pt-1 rounded-md"
                                @click="moverAHoy">
                            Hoy
                        </button>
                    </div>
                </template>
            </VCalendar>
        </div>
        <div class="col-3">
            <div class="row">
                <div class="col col-12">
                    <CalendarioSelectorUsuario @calendario-seleccionado="updateCalendario" />
                </div>
            </div>
            <div class="col-12">
                <div class="row row-12 p-3">
                    <div class="card p-3 col-12">
                        <div class="row mb-3">
                            <h6 class="text-black">Totales: {{ totales }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-primary">Laborables: {{ laborables }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-danger">Festivos: {{ festivos }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-warning">Vacaciones: {{ vacaciones }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h5 class="text-success">ILT: {{ ilt }}</h5>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-danger">Libre disposicion: {{ libreDisposicion }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-danger">Ausencias justificadas: {{ ausenciasJustificadas }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-black-50">Ausencias sin justificar: {{ ausenciasSinJustificadas }}</h6>
                        </div>
                        <div class="row mb-3">
                            <h6 class="text-info">Otros: {{ otros }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ancho-navegacion {
    width: 15em;
}
</style>
