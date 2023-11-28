<template>
    <v-app>
        <!-- Header -->
        <v-app-bar app color="blue-lighten-4">
            <v-app-bar-nav-icon @click.stop="toggleSidebar">
                <img src="../assets/LogoCanchaClaraBlue.png" alt="logo" class="logo" />
            </v-app-bar-nav-icon>
            <v-toolbar-title>Cancha Clara</v-toolbar-title>
        </v-app-bar>

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


</script>
<style lang="scss" scoped>
@import "../assets/styles/LayoutArriendos.scss"
</style>