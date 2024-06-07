<script setup>
/*import 'vuetify/styles';*/
import 'v-calendar/style.css';
import {ref, watchEffect} from 'vue';
import {useScreens} from 'vue-screen-utils';
import MiBotoneraNumeroMesesVer from "@/components/MiBotoneraNumeroMesesVer.vue";
import MiSelect from "@/components/MiSelect.vue";
import MiDarkMode from "@/components/MiDarkMode.vue";
import MenuAdmin from "@/components/MiMenuAdmin.vue";


const {mapCurrent} = useScreens({
    xs: '0px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
});

const expanded = mapCurrent({lg: true}, true);
const isDark = ref(true);
const calendar = ref(null);
const mesesVerBotones = ref(1);
const columns = ref(1);
const rows = ref(1)
const tipoDia = ref('');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

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

const attrs = ref([
    {
        key: 'today',
        highlight: {
            color: 'red',
            fillMode: 'solid',
            contentClass: 'italic',
        },
        dates: new Date(year, month, 12),
    },
    {
        highlight: {
            color: 'purple',
            fillMode: 'solid',
            contentClass: 'italic',
        },
        dates: new Date(year, month, 13),
    },
    {
        highlight: {
            color: 'purple',
            fillMode: 'outline',
        },
        dates: new Date(year, month, 14),
    },
]);


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
</script>

<template>
    <div class="row">
        <div class="col-9 text-center">
            <div class="row">
                <div class="col-2  d-flex justify-content-center my-3">
                    <MiSelect @update:selectedOption="tipoDia = $event"/>
                </div>
                <div class="col-8  d-flex justify-content-center my-2">
                    <MiBotoneraNumeroMesesVer @update:numeroMeses="mesesVerBotones = $event"/>
                </div>
                <div class="col-2  text-center my-3">
                    <MiDarkMode @update:modoOscuro="isDark = $event"/>
                </div>
            </div>
        <VCalendar class="my-5"
                   :columns="columns"
                   :rows="rows"
                   :is-dark="isDark"
                   :attributes="attrs"
                   ref="calendar">
            <template #footer>
                <div class="w-full px-4 pb-3 items-center">
                    <button
                        class="mueveDia bg-indigo hover:bg-indigo text-white font-bold w-full px-3 py-1 rounded-md"
                        @click="moverAHoy">
                        Hoy
                    </button>
                </div>
            </template>
        </VCalendar>
    </div>
    <div class="col-3">
        <MenuAdmin class="my-2"/>
    </div>
    </div>
</template>

<style scoped>
</style>
