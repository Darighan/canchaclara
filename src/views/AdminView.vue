<template>
<div>
    <div class="container">
        <h2>Horario y Agendamiento de Canchas</h2>
        <p>Selecciona una hora disponible para agendar:</p>

        <div class="schedule">
            <div class="time-slot">9:00 AM</div>
            <div class="time-slot">10:00 AM</div>
            <div class="time-slot">11:00 AM</div>
            <div class="time-slot">12:00 PM</div>
            <div class="time-slot">1:00 PM</div>
            <div class="time-slot">2:00 PM</div>
            <div class="time-slot">3:00 PM</div>
            <div class="time-slot">4:00 PM</div>
            <!-- Agrega más bloques de hora según tus necesidades -->
        </div>
    </div>
</div>
</template>

<script setup>



</script>

<style scoped>
.schedule {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.time-slot {
  background-color: #03A9F4; 
  color: white;
  padding: 10px;
  border-radius: 5px;
}


.background {
  background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmunicoihueco.cl%2FInicio%2F2022%2F12%2F26%2Fcanchas-de-padel-graderias-y-un-nuevo-centro-comunitario-son-los-proyectos-municipales-que-cierran-el-ano-en-coihueco%2F&psig=AOvVaw1sUtJ4S2DWEzvHyNZdBC-H&ust=1699939069257000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNClztScwIIDFQAAAAAdAAAAABAS'); 
  background-size: cover;
}
</style>
