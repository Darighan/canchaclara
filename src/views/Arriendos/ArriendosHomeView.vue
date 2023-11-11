<template>
<div>
    <h1>Bienvenido {{ userName }}</h1>
</div>
</template>

<script setup>
const userName = localStorage.getItem('userName');
</script>

<style scoped>
</style>