<template>
  <button @click="hacerReserva">Reservar Cancha</button>
</template>

<script setup>
import { defineProps } from 'vue';
import { getApi } from '@/services/apiService';

const props = defineProps({
  selectedCancha: String,
  fecha: String,
  horaInicio: String
});

const hacerReserva = async () => {
  if (props.selectedCancha && props.fecha && props.horaInicio) {
    // Asume que la función getApi se ha ajustado para manejar métodos POST
    getApi(`${process.env.VUE_APP_API}/arriendos/reservarCancha`, {
      method: 'POST',
      body: JSON.stringify({
        idCancha: props.selectedCancha,
        fecha: props.fecha,
        horaInicio: props.horaInicio
      })
    })
    .then((response) => {
      // Si no necesitas usar 'data', no necesitas capturarla
      // Si necesitas usar la respuesta, hazlo aquí. Por ejemplo:
      if (response.success) {
        // Mostrar mensaje de éxito, actualizar estado, etc.
        console.log('Reserva realizada con éxito');
      }
    })
    .catch((error) => {
      // Manejar el error
      console.error('Error al hacer la reserva:', error);
    });
  }
};
</script>
