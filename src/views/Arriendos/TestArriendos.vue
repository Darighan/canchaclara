<template>
    <div class="reserva-container">
        <h1>Reserva tu cancha</h1>
        <SelectEmpresa @selected-empresa="setEmpresa" />
        <SelectCancha v-if="empresaSeleccionada" :selectedEmpresa="empresaSeleccionada" @selected-cancha="setCancha" />
        <DatePicker v-if="canchaSeleccionada" @update:fecha="setFecha" />
        <TimePicker v-if="fechaSeleccionada" @update:hora="setHora" />
        <ReservaButton v-if="horaSeleccionada" :selectedCancha="canchaSeleccionada" :fecha="fechaSeleccionada"
            :horaInicio="horaSeleccionada" />
    </div>
</template>
 
<script setup>
import { ref } from 'vue';

import SelectEmpresa from '@/components/SelectEmpresa.vue';
import SelectCancha from '@/components/SelectCancha.vue';
import DatePicker from '@/components/DatePicker.vue';
import TimePicker from '@/components/TimePicker.vue';
import ReservaButton from '@/components/ReservaButton.vue';

const empresaSeleccionada = ref(null);
const canchaSeleccionada = ref(null);
const fechaSeleccionada = ref(null);
const horaSeleccionada = ref(null);

// Funciones para actualizar el estado basado en la selección del usuario
const setEmpresa = (empresa) => {
    empresaSeleccionada.value = empresa;
    canchaSeleccionada.value = null; // Reinicia la selección de cancha si la empresa cambia
    fechaSeleccionada.value = null;
    horaSeleccionada.value = null;
};

const setCancha = (cancha) => {
    canchaSeleccionada.value = cancha;
    fechaSeleccionada.value = null;
    horaSeleccionada.value = null;
};

const setFecha = (fecha) => {
    fechaSeleccionada.value = fecha;
    horaSeleccionada.value = null;
};

const setHora = (hora) => {
    horaSeleccionada.value = hora;
};

</script>
 
<style scoped>
.reserva-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Estilos para títulos dentro del contenedor */
h1 {
    color: #333;
    margin-bottom: 20px;
}

/* Estilos base para select y date inputs */
select,
input[type="date"] {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 15px;
    width: calc(100% - 30px);
    background-color: white;
    box-sizing: border-box;
    -webkit-appearance: none;
    /* Quitar estilos predeterminados en navegadores WebKit */
    -moz-appearance: none;
    /* Quitar estilos predeterminados en Firefox */
    appearance: none;
    /* Quitar estilos predeterminados en navegadores modernos */
}

/* Estilos para enfocar select y date inputs */
select:focus,
input[type="date"]:focus {
    border-color: #64b5f6;
    outline: none;
}

/* Estilos para botones dentro del contenedor */
button {
    background-color: #64b5f6;
    border: none;
    padding: 10px 15px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

/* Estilos para el estado hover de los botones */
button:hover {
    background-color: #567aba;
}

/* Estilos para botones deshabilitados */
button:disabled {
    background-color: #ccc;
    cursor: default;
}
</style>