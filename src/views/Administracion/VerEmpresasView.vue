<template>
    <div>
        <h1>
            Vista Empresas para Administracion
        </h1>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID Empresa</th>
                <th scope="col">Nombre Empresa</th>
                <th scope="col">Nombre del Responsable</th>
                <th scope="col">Apellido del Responsable</th>
                <th scope="col">Email Empresa</th>
                <th scope="col">Telefono Empresa</th>
                <th scope="col">Direccion Empresa</th>
                <th scope="col">Ciudad Empresa</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody v-if="empresas">
            <tr v-for="empresa in empresas" :key="empresa.ID_Empresa">
                <td v-for="(item, index) in empresa" :key="index">
                    <span>
                        {{ item }}
                    </span>
                </td>
                <td>
                    <button @click="showDialog(empresa.ID_Empresa)" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>

    <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">Confirmación</v-card-title>
            <v-card-text>
                ¿Estás seguro de que quieres eliminar esta Empresa?
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="confirmDelete">Confirmar</v-btn>
                <v-btn color="red darken-1" text @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getApi, deleteApi } from '@/services/apiService.js'
import { showToast } from '@/utils/toast';

const empresas = ref();
const dialog = ref(false);
const empresaIdToDelete = ref(null);

onMounted(async () => {
    loadEmpresas()
})

const loadEmpresas = async () => {
    try {
        await getApi(`${process.env.API}/empresasForAdmin`)
            .then((data) => {
                empresas.value = data
            })
    } catch (error) {
        console.log(error)
    }
}

const deleteEmpresas = async (ID_Empresa) => {
    try {
        await deleteApi(`${process.env.API}/deleteEmpresas/${ID_Empresa}`)
        loadEmpresas()
    } catch (error) {
        console.log(error)
    }

}

const showDialog = (ID_Empresa) => {
    empresaIdToDelete.value = ID_Empresa
    dialog.value = true

}

const confirmDelete = async () => {
    try {
        await deleteEmpresas(empresaIdToDelete.value)
        dialog.value = false
        showToast('Empresa Eliminada Correctamente', 'success', 'green')
    } catch (error) {
        showToast('Error al eliminar Empresa', 'danger', 'red')
    }
}
</script>

<style lang="scss" scoped></style> 