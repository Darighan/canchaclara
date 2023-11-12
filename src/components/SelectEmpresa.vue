<template>
    <select v-model="selectedEmpresa" @change="emitSelectedEmpresa">
        <option v-for="empresa in empresas" :key="empresa.ID_Empresa" :value="empresa.ID_Empresa">
            {{ empresa.NombreEmpresa }}
        </option>
    </select>
</template>
  
<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { getApi } from '@/services/apiService';

const empresas = ref([]);
const selectedEmpresa = ref(null);

// Aquí definimos los eventos que este componente puede emitir
const emit = defineEmits(['selectedEmpresa']);

onMounted(async () => {
    getApi(`${process.env.API}/arriendos/getInfoEmpresas`)
        .then((data) => {
            empresas.value = data;
        })
        .catch((error) => console.error(error));
});

// Esta función se llama cuando hay un cambio en la selección del dropdown
const emitSelectedEmpresa = () => {
    emit('selectedEmpresa', selectedEmpresa.value);
}
</script>
  
<style scoped>
/* Tus estilos aquí */

select {
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 4px; /* Bordes redondeados */
  padding: 8px; /* Espaciado interno */
  margin: 10px 0; /* Margen externo */
  width: 100%; /* Ocupar el ancho disponible */
  background-color: white; /* Fondo blanco para asegurarse de que es visible */
  box-sizing: border-box; /* El padding y border no afectan el ancho total */
  -webkit-appearance: none; /* Desactivar la apariencia predeterminada en WebKit/Blink */
  -moz-appearance: none; /* Desactivar la apariencia predeterminada en Firefox */
  appearance: none; /* Desactivar la apariencia predeterminada */
}

select:focus {
  outline: none; /* Eliminar el borde de foco predeterminado */
  border-color: #64b5f6; /* Cambiar el color del borde cuando está en foco */
}
</style>