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
                        {{ formatFecha(item) }}
                    </span>
                    <select class="form-select" v-else-if="index === 'EstadoReserva'" v-model="reserva.EstadoReserva"
                        @change="updateEstadoReserva(reserva.ID_Reserva, reserva.EstadoReserva)">
                        <option value="Pendiente">Pendiente</option>
                        <option value="Pagado">Pagado</option>
                    </select>
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
import { getApi, putApi } from '@/services/apiService.js'
import { showToast } from '@/utils/toast';

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

    } catch (error) {
        console.log(error)
    }
}

const formatFecha = (fecha) => {
    return fecha.split('T')[0];
}

const updateEstadoReserva = async (ID_Reserva, EstadoReserva) => {
    try {
        await putApi(`${process.env.API}/updateEstadoReserva/${ID_Reserva}/${EstadoReserva}`)
            .then((data) => {
                console.log(data)
                showToast('Estado de Reserva Actualizado', 'success', 'green')
            })

    } catch (error) {
        console.log(error)
    }
}


</script>

<style scoped></style>