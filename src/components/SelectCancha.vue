<template>
    <select v-model="selectedCancha" @change="emitSelectedCancha">
        <option selected disabled value="">Selecciona una cancha</option>
        <option v-for="cancha in canchas" :key="cancha.ID_Cancha" :value="cancha.ID_Cancha">
            {{ cancha.NombreCancha }}
        </option>
    </select>
</template>
  
<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { getApi } from '@/services/apiService';

const selectedCancha = ref('');
const canchas = ref([]);

const props = defineProps({
    selectedEmpresa: Number
});

// Definir los eventos que este componente puede emitir
const emit = defineEmits(['selected-cancha']);
watch(() => props.selectedEmpresa, (newIdEmpresa) => {
  if (newIdEmpresa) {
    getApi(`${process.env.API}/arriendos/getCanchasPorEmpresa/${newIdEmpresa}`)
      .then((data) => {
        canchas.value = data;
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    // Si no hay empresa seleccionada, limpiar las canchas
    canchas.value = [];
  }
}, { immediate: true }); // Immediate carga automaticamente las canchas al montar el componente

// Emitir el evento al seleccionar una cancha
const emitSelectedCancha = () => {
    emit('selected-cancha', selectedCancha.value);
};
</script>

<style scoped>
select {
    border: 1px solid #ccc;
    /* Borde gris claro */
    border-radius: 4px;
    /* Bordes redondeados */
    padding: 8px;
    /* Espaciado interno */
    margin: 10px 0;
    /* Margen externo */
    width: 100%;
    /* Ocupar el ancho disponible */
    background-color: white;
    /* Fondo blanco para asegurarse de que es visible */
    box-sizing: border-box;
    /* El padding y border no afectan el ancho total */
    -webkit-appearance: none;
    /* Desactivar la apariencia predeterminada en WebKit/Blink */
    -moz-appearance: none;
    /* Desactivar la apariencia predeterminada en Firefox */
    appearance: none;
    /* Desactivar la apariencia predeterminada */
}

select:focus {
    outline: none;
    /* Eliminar el borde de foco predeterminado */
    border-color: #64b5f6;
    /* Cambiar el color del borde cuando está en foco */
}</style>
  