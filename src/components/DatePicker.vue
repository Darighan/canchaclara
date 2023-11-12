<template>
  <input type="date" v-model="fecha" :min="fechaMinima" @input="emitirFecha" />
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue';

const fecha = ref(''); // Usamos una ref para mantener el estado reactivo de la fecha.
const emit = defineEmits(['update:fecha']); // Define los eventos que este componente puede emitir.

// Calcula la fecha mínima que se puede seleccionar, que es la fecha actual.
const fechaMinima = computed(() => {
  const hoy = new Date();
  const mes = (`0${hoy.getMonth() + 1}`).slice(-2); // Añade un cero si es necesario para el formato MM
  const dia = (`0${hoy.getDate()}`).slice(-2); // Añade un cero si es necesario para el formato DD
  return `${hoy.getFullYear()}-${mes}-${dia}`;
});

// Función para emitir la fecha seleccionada al componente padre.
const emitirFecha = () => {
  emit('update:fecha', fecha.value);
};
</script>