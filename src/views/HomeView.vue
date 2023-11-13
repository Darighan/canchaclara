<template>
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
</template>

<script setup>



</script>

<style scoped>
.v-jumbotron {
  background-color: #29B6F6; 
  color: white;
}

.v-btn {
  background-color: #4FC3F7; 
  color: black;
}


.background {
  background-image: url('https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Ffondos-deportivos&psig=AOvVaw3d5SG1tjun4a2M6WZ1ph_2&ust=1699937260499000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiwjPaVwIIDFQAAAAAdAAAAABAb'); 
  background-size: cover;
}
</style>

