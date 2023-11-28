<template>
  <div class="bg-img-home">
    <div class="contenedor-central">
      <div class="titulo-central">
        <h1 class="tituloHomeView">Bienvenido a CanchaClara</h1>
      </div>
      <div class="opciones">
        <!-- Opción de arriendo que redirige a LoginView -->
        <router-link to="/login" class="opcion">
          <i class="icono fas fa-futbol"></i>
          <p>¿Deseas realizar un arriendo?</p>
          <p>HAZ CLICK ACA</p>
        </router-link>
        <!-- Opción de unirse que redirige a LoginEmpresasView -->
        <router-link to="/empresas" class="opcion">
          <i class="icono fas fa-building"></i>
          <p>¿Eres un Complejo Deportivo y Quieres Unirtenos?</p>
          <p>HAZ CLICK ACA</p>
        </router-link>
        <!-- Opción de administrador que redirige a LoginAdministracionView -->
        <router-link to="/administracion" class="opcion">
          <i class="icono fas fa-user-shield"></i>
          <p>¿Eres un Administrador?</p>
          <p>HAZ CLICK ACA</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script setup de Vue es opcional para lógica adicional o estado del componente
</script>

<style scoped>
@import "../assets/styles/homeViewStyle.scss";
/* Estilos adicionales específicos para este componente si son necesarios */
</style>


  
  
