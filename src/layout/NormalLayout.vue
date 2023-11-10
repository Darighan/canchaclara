<template>
    <v-app>
        <!-- Header -->
        <v-app-bar app color="blue-lighten-4">
            <v-app-bar-nav-icon @click.stop="toggleSidebar">
                <v-icon></v-icon>
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