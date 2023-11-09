<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="blue-lighten-4">
      <v-app-bar-nav-icon @click.stop="toggleSidebar" />
      <v-toolbar-title>Cancha Clara</v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer app permanent stateless :mini-variant="miniVariant" :clipped="clipped">
      <!-- Contenido de la barra lateral -->

      <router-link :to="{ name: 'agendarArriendos' }">
        <v-btn>
          Hola soy un Button
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'verCanchas' }">
        <v-btn>
          Hola Soy otro Button
        </v-btn>
      </router-link>



    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container fluid>
        <!-- Contenido de la página -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <!-- Contenido del pie de página -->
      hola soy un footer
    </v-footer>
  </v-app>
</template>
  
<script setup>
import { ref } from 'vue';

const miniVariant = ref(false);
const clipped = ref(false);

const toggleSidebar = () => {
  miniVariant.value = !miniVariant.value;
  clipped.value = !clipped.value;
};
</script>
<style></style>