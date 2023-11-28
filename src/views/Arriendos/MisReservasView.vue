<template>
    <h1>Mis Reservas</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Cancha</th>
                <th scope="col">Nombre Arrendatario</th>
                <th scope="col">Apellido Arrendatario</th>
                <th scope="col">Fecha Reserva</th>
                <th scope="col">Hora Inicio</th>
                <th scope="col">Estado Reserva</th>
            </tr>
        </thead>
        <tbody v-if="reservasUser">
            <tr v-for="reservaUser in reservasUser" :key="reservaUser.idUser" class="filaTablaReserva">
                <td v-for="(item, index) in reservaUser" :key="index">
                    <span v-if="index === 'FechaReserva'">
                        {{ formatFecha(item) }}
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
import { getApi } from '@/services/apiService';
import { showToast } from '@/utils/toast';

const ID_User = localStorage.getItem('idUser')
const reservasUser = ref();

onMounted(async () => {
    loadReservasUser(ID_User)
})

const loadReservasUser = async (ID_User) => {
    try {
        await getApi(`${process.env.API}/reservasForUser/${ID_User}`)
            .then((data) => {
                reservasUser.value = data
            })
    } catch (error) {
        showToast('Error al cargar Reservas', 'error', 'red')
        console.log(error)
    }
}

const formatFecha = (fecha) => {
    return fecha.split('T')[0];
}
</script>

<style lang="scss" scoped >
@import "../../assets/styles/misReservasStyle.scss"
</style>