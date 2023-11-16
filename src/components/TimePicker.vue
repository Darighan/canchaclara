<template>
  <select v-model="horaSeleccionada" @change="emitirHora" :disabled="horasDisponibles.length === 0">
    <option value="" disabled>Selecciona una hora</option>
    <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}</option>
  </select>
  <div v-if="horasDisponibles.length === 0">
    No hay horarios disponibles para la fecha y cancha seleccionadas.
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { getApi } from '@/services/apiService';

const props = defineProps({
  fechaSeleccionada: String,
  canchaSeleccionada: Number
});
const emit = defineEmits(['update:hora']);
const horaSeleccionada = ref('');
const horariosOperacion = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const horasDisponibles = ref([...horariosOperacion]);

watch(() => [props.fechaSeleccionada, props.canchaSeleccionada], async () => {
  if (props.fechaSeleccionada && props.canchaSeleccionada) {
    try {
      console.log('Obteniendo horarios no disponibles...');
      const response = await getApi(`${process.env.API}/arriendos/horariosNoDisponibles/${props.canchaSeleccionada}/${props.fechaSeleccionada}`);
      console.log(response);
      // Asegúrate de que el formato de la hora en la respuesta coincida con los de horariosOperacion
      const horariosReservados = response.map(reserva => reserva.HorarioInicio.slice(0, 5));
      horasDisponibles.value = horariosOperacion.filter(hora => !horariosReservados.includes(hora));
    } catch (error) {
      console.error(error);
      horasDisponibles.value = [...horariosOperacion]; // Resetea a todos los horarios si hay error
    }
  } else {
    horasDisponibles.value = [...horariosOperacion];
  }
}, { immediate: true });

const emitirHora = () => {
  emit('update:hora', horaSeleccionada.value);
};
</script>

<style scoped>

/* Estilos aplicados al contenedor de reserva */
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
  -webkit-appearance: none; /* Quitar estilos predeterminados en navegadores WebKit */
  -moz-appearance: none; /* Quitar estilos predeterminados en Firefox */
  appearance: none; /* Quitar estilos predeterminados en navegadores modernos */
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

/* Puedes agregar más estilos personalizados para otros componentes si es necesario */

</style>
