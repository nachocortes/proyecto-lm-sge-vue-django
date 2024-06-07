<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCalendarioStore } from '@/stores/calendarios.js';
import { useAuthStore } from '@/stores/auth.js';

const calendarios = useCalendarioStore();
const selectedCalendario = ref(null);
const auth = useAuthStore();

const userCalendarios = computed(() => {
    return calendarios.items.filter(calendario => calendario.empleado.id === auth.user.id);
});

onMounted(() => {
    calendarios.detail();
});

function emitCalendarioSeleccionado() {
    emit('calendario-seleccionado', selectedCalendario.value);
}
</script>

<template>
    <div class="select-container">
        <select class="form-select form-select-sm bg-body-tertiary"
                v-model="selectedCalendario" @change="emitCalendarioSeleccionado">
            <option value="" disabled>Seleccione un calendario</option>
            <option v-for="calendarioItem in userCalendarios" :key="calendarioItem.id" :value="calendarioItem">
                {{ calendarioItem.nombre }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.select-container {
    width: 150px;
}
</style>
