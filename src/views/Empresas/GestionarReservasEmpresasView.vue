<template>
    <div class="distribucionMes">


        <h2>Distribucion Arriendos por Mes</h2>
        <DoughnutChart :chartData="chartData" class="graficoDistribucionMes" />
    </div>
    <div class="filtrarPorMes">
        <label for="month">
            Filtrar por mes:
        </label>
        <select @change="sortByMonth">
            <option selected value="All">Todos</option>
            <option value="0">Enero</option>
            <option value="1">Febrero</option>
            <option value="2">Marzo</option>
            <option value="3">Abril</option>
            <option value="4">Mayo</option>
            <option value="5">Junio</option>
            <option value="6">Julio</option>
            <option value="7">Agosto</option>
            <option value="8">Septiembre</option>
            <option value="9">Octubre</option>
            <option value="10">Noviembre</option>
            <option value="11">Diciembre</option>
        </select>
    </div>
    <div>
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
        <div v-if="isReservasEmpty" class="sinReservas">
            No hay reservas disponibles para este mes.
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { getApi, putApi } from '@/services/apiService.js'
import { showToast } from '@/utils/toast';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

const ID_Empresa = localStorage.getItem('idEmpresa')
const reservas = ref();
let reservasFromApi = ref();
const isReservasEmpty = ref(false);


onMounted(async () => {
    loadReservas(ID_Empresa)
})

const loadReservas = async (ID_Empresa) => {
    try {
        await getApi(`${process.env.API}/reservasForEmpresa/${ID_Empresa}`)
            .then((data) => {

                reservasFromApi.value = data
                reservas.value = reservasFromApi.value
                updateChartData(reservasFromApi.value);
            })

    } catch (error) {
        showToast('Error al cargar reservas', 'error', 'red')
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


Chart.register(...registerables);

const chartData = ref({
    labels: [],
    datasets: [
        {
            data: [],
            backgroundColor: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928",],
        },
    ],
});

const updateChartData = (reservasFromApi) => {
    const cantidadPorMes = Array.from({ length: 12 }).fill(0);

    reservasFromApi.forEach((reserva) => {
        const mes = new Date(reserva.FechaReserva).getMonth();
        cantidadPorMes[mes]++;
    });

    chartData.value.labels = cantidadPorMes.map((_, index) =>
        new Date(0, index).toLocaleString('es-CL', { month: 'long' })

    );
    chartData.value.datasets[0].data = cantidadPorMes;
}

const filterOptions = ref({
    srtMonth: ''
});

const sortByMonth = (e) => {
    filterOptions.value.srtMonth = e.target.value;
    filterReservas();



}

const filterReservas = () => {
    if (filterOptions.value.srtMonth === 'All') {
        reservas.value = reservasFromApi.value;

    } else {
        const newReservas = reservasFromApi.value.filter(filterByMonth);
        reservas.value = newReservas;

    }

    isReservasEmpty.value = reservas.value.length === 0;
}

const filterByMonth = (reserva) => {
    if (filterOptions.value.srtMonth === 'All') {
        return true;
    }

    const reservaMonth = new Date(reserva.FechaReserva).getMonth().toString();
    return reservaMonth === filterOptions.value.srtMonth;

}



</script>

<style lang="scss" scoped>
@import "../../assets/styles/gestionarReservasEmpresasStyle.scss";
</style>