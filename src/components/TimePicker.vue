<template>
  <input type="time" v-model="hora" @input="emitirHora" />
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const hora = ref(''); // Usamos una ref para mantener el estado reactivo de la hora.

// Declaramos los eventos que este componente puede emitir
const emit = defineEmits(['update:hora']);
 
// Función para emitir la hora seleccionada al componente padre.
const emitirHora = () => {
  emit('update:hora', hora.value);
};
</script>
