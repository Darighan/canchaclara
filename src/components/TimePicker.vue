<template>
  <select v-model="hora" @change="emitirHora">
    <option value="" disabled>Selecciona una hora</option>
    <option v-for="horaDisponible in horasDisponibles" :key="horaDisponible" :value="horaDisponible">
      {{ horaDisponible }}
    </option>
  </select>
</template>

<script setup>
import { ref, watch, computed, defineEmits, defineProps } from 'vue';
import { getApi } from '@/services/apiService';

const hora = ref('');
const emit = defineEmits(['update:hora']);
const props = defineProps({
  fechaSeleccionada: String,
  idCanchaSeleccionada: Number
});
const horariosReservados = ref([]);

// Asumiendo que tu API devuelve un array de horarios como strings ["09:00", "10:00", ...]
watch(() => props.fechaSeleccionada, async (fecha) => {
  if (fecha && props.idCanchaSeleccionada) {
    try {
      const response = await getApi(`/arriendos/horariosNoDisponibles/${props.idCanchaSeleccionada}/${fecha}`);
      // Suponiendo que la API devuelve un array de strings con los horarios reservados
      horariosReservados.value = response.map(reserva => reserva.HoraInicio);
    } catch (error) {
      console.error(error);
      horariosReservados.value = []; // Resetear si hay un error
    }
  }
}, { immediate: true });

const horasDisponibles = computed(() => {
  const horariosOperacion = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  // Filtra los horarios de operación excluyendo los horarios reservados.
  return horariosOperacion.filter(hora => !horariosReservados.value.includes(hora));
});

const emitirHora = () => {
  emit('update:hora', hora.value);
};
</script>
