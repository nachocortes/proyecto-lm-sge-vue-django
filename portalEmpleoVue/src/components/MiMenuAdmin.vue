<script setup>
import { onMounted, reactive, ref } from 'vue';
import YearSelect from '@/components/calendario/calendarioComponentes/CalendarioYearSelect.vue';
import EmpleadoSelect from '@/components/empleados/EmpleadoSelector.vue';
import { useEmpleadoStore } from '@/stores/empleados.js';
import { useCalendarioStore } from '@/stores/calendarios.js';

// Obtener las tiendas de empleados y calendarios
const empleados = useEmpleadoStore();
const calendarios = useCalendarioStore();

const selectedItem = ref(null);
const selectedYear = ref(null);
const mostrarFormulario = ref(false);

onMounted(() => {
    empleados.fetch();
});

const handleItemSelected = (item) => {
    selectedItem.value = item;
};

const handleYearSelected = (year) => {
    selectedYear.value = year;
};

const guardarCalendario = async () => {
    if (selectedItem.value && selectedYear.value) {
        const nuevoCalendario = {
            empleado: selectedItem.value.url,
            anio: selectedYear.value
        };
        console.log('Datos a enviar:', nuevoCalendario);
        try {
            await calendarios.save(nuevoCalendario);
            alert('calendario guardado con éxito');
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Por favor, seleccione un empleado y un año');
    }
};
</script>

<template>
    <nav class="d-flex flex-column flex-shrink-0 p-1 bg-body-tertiary ancho-navegacion">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <button @click="mostrarFormulario = !mostrarFormulario" class="nav-link nav-link text-start">
                    <i class="bi bi-house me-2"></i>
                    <span>{{ mostrarFormulario ? 'Ocultar Formulario' : 'Crear calendario' }}</span>
                </button>
            </li>
        </ul>
    </nav>
    <div v-if="mostrarFormulario &&  auth.isAuthenticated" class="mt-3">
        <div>
            <YearSelect @update:selectedYear="handleYearSelected"/>
        </div>
        <div>
            <EmpleadoSelect :empleados="empleados.items" @item-selected="handleItemSelected"/>
        </div>
        <div>
            <button class="btn btn-outline-primary" @click="guardarCalendario">Guardar Calendario</button>
        </div>
    </div>
</template>

<style scoped>
.ancho-navegacion {
    width: 15em;
}
</style>
