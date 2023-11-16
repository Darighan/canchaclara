<template>
    <div class="bg-img-home">
      <!-- Contenedores de login existentes -->
      <div class="contenedor-central">
        <div class="contenedor-login">
          <div class="contenedor-deportista">
            <router-link :to="{ name: 'arriendos' }">
              <v-btn>Login Deportista</v-btn>
            </router-link>
          </div>
          <div class="contenedor-empresa">
            <router-link :to="{ name: 'empresas' }">
              <v-btn>Login Empresa</v-btn>
            </router-link>
          </div>
          <div class="contenedor-administracion">
            <router-link :to="{ name: 'administracion' }">
              <v-btn>Login Administración CanchaClara</v-btn>
            </router-link>
          </div>
        </div>
        
        <!-- Nuevos contenedores de bienvenida agregados debajo -->
        <div class="contenedor-bienvenida">
          <h1>Bienvenido a CanchaClara</h1>
          <p>¿Deseas realizar un arriendo? <router-link :to="{ name: 'arriendos' }"><v-btn>haz click AQUÍ</v-btn></router-link></p>
        </div>
        <div class="contenedor-deportista-nuevo">
          <p>Eres un complejo deportivo y quieres unirtenos</p>
          <router-link :to="{ name: 'empresas' }"><v-btn>Haz click aquí</v-btn></router-link>
        </div>
        <div class="contenedor-administracion-nuevo">
          <p>Eres un administrador y quieres usar nuestros servicios</p>
          <router-link :to="{ name: 'administracion' }"><v-btn>haz clic aquí</v-btn></router-link>
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
  
