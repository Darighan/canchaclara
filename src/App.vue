<template>
<RouterView />
</template>

<script>


</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  background-color: #E0F7FA; // Fondo celeste claro
  color: #01579B; // Texto en azul oscuro
}

nav {
  background-color: #03A9F4; // Barra de navegación en azul
  a {
    color: white;
    &:hover {
      color: #B3E5FC; // Celeste al pasar el ratón
    }
  }
}
</style>
