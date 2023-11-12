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
};

const setCancha = (cancha) => {
  canchaSeleccionada.value = cancha;
};

const setFecha = (fecha) => {
  fechaSeleccionada.value = fecha;
};

const setHora = (hora) => {
  horaSeleccionada.value = hora;
};

</script>
 
<style scoped>
         
.reserva-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

</style>