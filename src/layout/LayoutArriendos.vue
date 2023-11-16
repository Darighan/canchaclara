<template>
  <v-app>
    <!-- Header -->
    <v-app-bar app color="blue-lighten-4">
      <v-app-bar-nav-icon @click.stop="toggleSidebar" />
      <v-toolbar-title>Cancha Clara Arriendos</v-toolbar-title>
      <router-link :to="{ name: 'home' }">
        <v-btn class="ml-auto" @click="cerrarSesion">Cerrar Sesión</v-btn>
      </router-link>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer app permanent stateless :mini-variant="miniVariant" :clipped="clipped">
      <!-- Contenido de la barra lateral -->

      <router-link :to="{ name: 'agendarArriendos' }">
        <div class="test">
          <v-btn>
            Agendar Arriendos
          </v-btn>
        </div>

      </router-link>


      <router-link :to="{ name: 'verCanchas' }">
        <div class="test">
          <v-btn>
            Ver Canchas
          </v-btn>
        </div>
      </router-link>

      <router-link :to="{ name: 'inscripcionTorneos' }">
        <div class="test">
          <v-btn>
            Inscripcion Torneos
          </v-btn>
        </div>
      </router-link>

      <router-link :to="{ name: 'gestionPerfil' }">
        <div class="test">
          <v-btn>
            Gestion Perfil
          </v-btn>
        </div>
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
  localStorage.removeItem('idUser');
  localStorage.removeItem('userName');
}
</script>
<style lang="scss" scoped >
@import "../assets/styles/LayoutArriendos.scss"
</style>