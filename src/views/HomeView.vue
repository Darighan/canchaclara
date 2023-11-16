<template>
    <div class="bg-img-home">
      <div class="contenedor-central">
        <!-- Contenedor de bienvenida -->
        <div class="contenedor-bienvenida">
          <h1>Bienvenido a CanchaClara</h1>
          <div class="opcion-arriendo">
            <p>¿Deseas realizar un arriendo?</p>
            <router-link :to="{ name: 'arriendos' }">
              <v-btn>haz click AQUÍ</v-btn>
            </router-link>
          </div>
          <div class="opcion-complejo">
            <p>¿Eres un Complejo Deportivo y Quieres Unirtenos?</p>
            <router-link :to="{ name: 'empresas' }">
              <v-btn>Haz click AQUÍ</v-btn>
            </router-link>
          </div>
          <div class="opcion-administrador">
            <p>¿Eres un Administrador?</p>
            <router-link :to="{ name: 'administracion' }">
              <v-btn>Haz click AQUÍ</v-btn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Tu script de Vue aquí
  </script>
  
  <style scoped>
  @import "../assets/styles/homeViewStyle.scss";
  </style>
  
  
