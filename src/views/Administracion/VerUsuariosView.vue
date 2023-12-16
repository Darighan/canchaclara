<template>
    <div>
        <h1>
            Vista Usuarios Totales CanchaClara

        </h1>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody v-if="usuarios">
            <tr v-for="usuario in usuarios" :key="usuario.idUser">
                <td v-for="(item, index) in usuario" :key="index">
                    <span>
                        {{ item }}
                    </span>
                </td>
                <td>
                    <button @click="showDialog(usuario.idUser)" class="btn btn-danger">Eliminar</button>
                </td>

            </tr>

        </tbody>
    </table>

    <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">Confirmación</v-card-title>
            <v-card-text>
                ¿Estás seguro de que quieres eliminar este usuario?
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


const usuarios = ref();
const dialog = ref(false);
const userIdToDelete = ref(null);

onMounted(async () => {
    loadUsers()
})


const loadUsers = async () => {
    try {
        await getApi(`${process.env.API}/usersForAdmin`)
            .then((data) => {
                usuarios.value = data
            })
    } catch (error) {
        console.log(error)
    }
}

const deleteUsers = async (idUser) => {
    try {
        await deleteApi(`${process.env.API}/deleteUser/${idUser}`)
        loadUsers()
    } catch (error) {
        console.log(error)
    }
}

const showDialog = (idUser) => {
    userIdToDelete.value = idUser;
    dialog.value = true;
};

const confirmDelete = async () => {
    try {
        await deleteUsers(userIdToDelete.value)
        dialog.value = false
        showToast('Usuario Eliminado Correctamente', 'success', 'green')
    } catch (error) {
        showToast('Error al eliminar usuario', 'danger', 'red')
    }


}

</script>

<style lang="scss" scoped>
@import "../../assets/styles/VerUsuariosViewStyle.scss"
</style>