<script setup>

import { toggleSidebar, sidebarWidth} from './sidebarState'


</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth}">
        CanchaClara
        <span class="collapse-icon" @click="toggleSidebar">
            <i class="bi bi-arrow-right"></i>
        </span>
    </div>
    </template>

<style>
:root{
    --sidebar-bg-color: #2c3e50;
    --sidebar-item-hover: #2c3e50;
    --sidebar-item-active: #2c3e50;
}
.sidebar {
    color: rgb(255, 255, 255);
    background-color: var(--sidebar-bg-color);
    text-align: center;
    float: right;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}
</style>