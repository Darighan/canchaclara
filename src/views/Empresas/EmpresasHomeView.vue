<template>
    <h1>Bienvenido {{ userNameEmpresa }}</h1>
  </template>

<script setup>
const userNameEmpresa = localStorage.getItem('userNameEmpresa');


</script>


<style scoped>



</style>