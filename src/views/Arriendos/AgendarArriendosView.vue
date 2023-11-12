<template>
    <div class="container-fluid">

        <div class="">
            <h1>Informacion Complejo Deportivos</h1>
        </div>
        <v-carousel>
            <v-carousel-item v-for="empresa in empresaInfo" :key="empresa.ID_Empresa">
                <div class="card">
                    <div class="empresa-card">
                        <h2>{{ empresa.NombreEmpresa }}</h2>
                        <p>Responsable: {{ empresa.NombreResponsable }} {{ empresa.ApellidoResponsable }}</p>
                        <p>Teléfono: {{ empresa.TelefonoEmpresa }}</p>
                        <p>Dirección: {{ empresa.DireccionEmpresa }}</p>
                        <p>Ciudad: {{ empresa.CiudadEmpresa }}</p>
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel>

        <form>
            <div class="arriendosTitle">
                <h1>Selecciona ComplejoDeportivo</h1>
            </div>
            <div>
                <label for="empresaSelect">Selecciona un Complejo Deportivo:</label>
                <select class=form-select id="empresaSelect" v-model="selectedEmpresa">
                    <option selected disabled> Selecciona un Complejo Deportivo</option>
                    <option v-for="empresa in empresaInfo" :key="empresa.ID_Empresa" :value="empresa.NombreEmpresa">{{
                        empresa.NombreEmpresa }}</option>
                </select>
                <p>Has seleccionado: {{ selectedEmpresa }}</p>
            </div>
        </form>
    </div>
</template>

<script setup>
import { getApi } from '@/services/apiService';
import { ref, onMounted } from 'vue';


const selectedEmpresa = ref('');
const empresaInfo = ref();


onMounted(async () => {
    getApi(`${process.env.API}/arriendos/getInfoEmpresas`)
        .then((data) => {
            empresaInfo.value = data;
            console.table(empresaInfo.value)

        })
        .catch((error) => console.log(error))
})


</script>

<style scoped></style>