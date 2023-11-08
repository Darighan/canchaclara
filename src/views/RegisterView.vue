<template>
    <div>
        <h1>Registro de Usuario</h1>
        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required v-model="inptNombre"><br>

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required v-model="inptApellido"><br>

            <label for="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required v-model="inptEmail"><br>

            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required v-model="inptPassword"><br>

            <label for="telefono">Telefono:</label>
            <input type="number" id="telefono" name="telefono" required v-model="inptTelefono"><br>

            <!-- Agrega aquí más campos según tus necesidades -->

            <input type="submit" value="Registrarse" @click.prevent="handleSubmit">

        </form>


    </div>
</template>

<script setup>

import { ref } from 'vue';
import { showToast } from '@/utils/toast';
import { postApi} from '@/services/apiService';


const inptNombre = ref("");
const inptApellido = ref("");
const inptEmail = ref("");
const inptPassword = ref("");
const inptTelefono = ref("");

const isLoad =  ref(false);
const isButtonDisabled = ref(false);

const handleSubmit = async () => {
    isLoad.value = true;
    isButtonDisabled.value= true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!emailRegex.test(inptEmail.value.trim())) {
        showToast('Porfavor ingresar un email valido', 'danger', 'red')
        isLoad.value = false;
        isButtonDisabled.value = false;
        return;

    }

    if(!inptNombre.value){
        showToast('Porfavor rellenar campo: Nombre', 'danger', 'red')
        return;
    }
    if(!inptApellido.value){
        showToast('Porfavor rellenar campo: Apellido', 'danger', 'red')
        return;
    }
    if(!inptPassword.value){
        showToast('Porfavor rellenar campo: Contraseña', 'danger', 'red')
        return;
    }
    if(!inptEmail.value){
        showToast('Porfavor rellenar campo: Correo', 'danger', 'red')
        return;
    }
    if(!inptTelefono.value){
        showToast('Porfavor rellenar campo: Telefono', 'danger', 'red')
        return;
    }


}

const registerObj = {
    nombre: inptNombre.value,
    apellido: inptApellido.value,
    email: inptEmail.value,
    password: inptPassword.value,
    telefono: inptTelefono.value
}

postApi(`${process.env.API}/addUser`, registerObj)
.then(data => {
    if(data.message === 'ok'){
        showToast('Usuario registrado con exito', 'success', 'green')
    }
}).catch(error => {
    console.log(error)
})
</script>

<style scoped>

</style>