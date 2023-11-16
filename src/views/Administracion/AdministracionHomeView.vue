<template>
    <div>
        <h1>Hola Administrador: {{ userNameAdministracion }}</h1>
    </div>
    </template>
    
    <script setup>
    const userNameAdministracion = localStorage.getItem('userNameAdministracion')
    </script>
    
    <style scoped>
    </style>