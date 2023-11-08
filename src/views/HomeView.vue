<template>
    <div class="Contenedor central">
        <div class="Contenedor-Deportista">
            <router-link :to="{ name: 'deportes' }">
                <button >Login Deportista</button>
            </router-link>

        </div>
        <div class="Contenedor-Empresa">
            <router-link :to="{ name: 'empresa'}">
            <button>Login Empresa</button>
           </router-link>
        </div>

        <div class="Contenedor-CanchaClara">
            <router-link :to="{ name: 'empresa'}">
            <button>Login CanchaClara</button>
           </router-link>
        </div>

    </div>
</template>

<script setup>



</script>

<style>

.Contenedor-Deportista{
    display: flex;
    justify-content: center;
}

.Contenedor-Empresa{
    display: flex;
    justify-content: center;
}

.Contenedor-CanchaClara{
    display: flex;
    justify-content: center;
}
</style>
