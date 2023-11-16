<template>
    <div class="bg-img-home">
        <div class="Contenedor central">
            <div class="Contenedor-Deportista">
                <router-link :to="{ name: 'arriendos' }">
                    <v-btn>
                        Login Deportista
                    </v-btn>
                </router-link>

            </div>
            <div class="Contenedor-Empresa">
                <router-link :to="{ name: 'empresas' }">
                    <v-btn>
                        Login Empresa
                    </v-btn>
                </router-link>
            </div>
            <div class="Contenedor-Administracion">
                <router-link :to="{ name: 'administracion' }">
                    <v-btn>
                        Login Administracion CanchaClara
                    </v-btn>
                </router-link>
            </div>
        </div>


    </div>
</template>

<script setup>



</script>

<style scoped>
@import "../assets/styles/homeViewStyle.scss"

</style>

