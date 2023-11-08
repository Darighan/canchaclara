<template>
    <div class="layout">
        <NavHeader />
        <div class="sidebar">
            <SidebarCanchaClara />
        </div>
        <div class="main-content">
            <h1>VIEW EMPRESA</h1>
        </div>



    </div>
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue';
import SidebarCanchaClara from '@/components/sidebar/SidebarCanchaClara.vue';
</script>


<style scoped>
.layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 200px 1fr;
    grid-template-areas:
        "NavHeader NavHeader"
        "main-content sidebar"
        "footer footer";
    height: 100vh;
}

.main-content {
    display: grid;
    grid-template-columns: 200px 1fr;
    /* Barra lateral, Contenido */
    grid-template-areas: "sidebar content";
}

h1 {
    text-align: center;
}
</style>