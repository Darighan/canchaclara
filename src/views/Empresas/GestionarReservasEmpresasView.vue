<template>
<div>
    <h1>View Para Gestion de Empresas</h1>
</div>

<table class="table">
    <thead>
        <tr>
            <th scope="col">ID Reserva</th>
            <th scope="col">Cancha</th>
            <th scope="col">Nombre Arrendatario</th>
            <th scope="col">Apellido Arrendatario</th>
            <th scope="col">Fecha Reserva</th>
            <th scope="col">Hora Inicio</th>
            <th scope="col">Estado Reserva</th>
        </tr>
    </thead>
    <tbody v-if="reservas">
        <tr v-for="reserva in reservas" :key="reserva.ID_Empresa">
            <td v-for="(item, index) in reserva" :key="index">
                <span v-if="index === 'FechaReserva'">
                    {{ formatFecha(item)  }}
                </span>
                <span v-else>
                    {{ item }}
                </span>
            </td>
        </tr>
    </tbody>

</table>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { getApi } from '@/services/apiService.js'

const ID_Empresa = localStorage.getItem('idEmpresa')
const reservas = ref(); 

onMounted(async () => {
    loadReservas(ID_Empresa)
})

const loadReservas = async (ID_Empresa) => {
    try {
        await getApi(`${process.env.API}/reservasForEmpresa/${ID_Empresa}`)
        .then((data) => {
            reservas.value = data
            console.log(reservas.value)
        })
        
    }catch (error) {
        console.log(error)
    }
}

const formatFecha = (fecha) => {
    return fecha.split('T')[0];
}
 

</script>

<style scoped>
</style>