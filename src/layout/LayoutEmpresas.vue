<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="blue-lighten-4">
      <v-app-bar-nav-icon @click.stop="toggleSidebar">
        <img src="../assets/LogoCanchaClaraBlue.png" alt="logo" class="logo" />

      </v-app-bar-nav-icon>
      <v-toolbar-title>Cancha Clara Empresas</v-toolbar-title>
      <router-link :to="{ name: 'home' }">
        <v-btn class="ml-auto" @click="cerrarSesion">Cerrar Sesión</v-btn>
      </router-link>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer class="sidebarArriendos" app permanent stateless :mini-variant="miniVariant" :clipped="clipped">
      <!-- Contenido de la barra lateral -->

      <router-link :to="{ name: 'gestionarReservasEmpresas' }">
        <div class="test">
          <v-btn class="btn btn-color">
            Gestionar Reservas
          </v-btn>
        </div>

      </router-link>


      <router-link :to="{ name: 'creacionTorneos' }">
        <div class="test">
          <v-btn class="btn btn-color">
            Creacion Torneos
          </v-btn>
        </div>
      </router-link>



    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main class="mainViewContainer">
      <v-container fluid>
        <!-- Contenido de la página -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="blue-lighten-4">
      <!-- Contenido del pie de página -->
      CanchaClara 2023 - Todos los derechos reservados
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

const cerrarSesion = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userNameEmpresa');
}
</script>
<style lang="scss" scoped >
@import "../assets/styles/LayoutArriendos.scss"
</style>