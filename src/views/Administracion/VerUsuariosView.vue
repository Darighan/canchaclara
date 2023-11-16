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
                    <button @click="deleteUsers(usuario.idUser)" class="btn btn-danger">Eliminar</button>
                </td>

            </tr>

        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getApi, deleteApi } from '@/services/apiService.js'


const usuarios = ref()

onMounted(async () => {
    loadUsers()
})

const loadUsers = async () => {
    try{
        await getApi(`${process.env.API}/usersForAdmin`)
        .then((data) => {
            usuarios.value = data
        })
    } catch(error){
        console.log(error)
    }
}

const deleteUsers = async (idUser) => {
    try{
        await deleteApi(`${process.env.API}/deleteUser/${idUser}`)
        loadUsers()
        }catch(error){
        console.log(error)
    }
}

</script>

<style scoped>
</style>