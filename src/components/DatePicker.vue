<template>
  <input type="date" v-model="fecha" @input="emitirFecha" />
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const fecha = ref(''); // Usamos una ref para mantener el estado reactivo de la fecha.
const emit = defineEmits(['update:fecha']); // Define los eventos que este componente puede emitir.

// Función para emitir la fecha seleccionada al componente padre.
const emitirFecha = () => {
  emit('update:fecha', fecha.value);
};
</script>
