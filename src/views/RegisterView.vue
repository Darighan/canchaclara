<template>
    <div class="bg-img-register">
        <div class="content">
            <header> Registro de Usuario </header>
            <form action="#">
                <!-- Campos del formulario -->
                <div class="field">
                    <input type="text" id="nombre" name="nombre" required placeholder="Nombre" v-model="inptNombre" />
                </div>
                <div class="field">
                    <input type="text" id="apellido" name="apellido" required placeholder="Apellido" v-model="inptApellido" />
                </div>
                <div class="field">
                    <input type="text" autocomplete="off" id="correo" name="correo" required placeholder="Correo electrónico" v-model="inptEmail" />
                </div>
                <div class="field">
                    <input type="password" autocomplete="new-password" id="contrasena" name="contrasena" required placeholder="Contraseña" v-model="inptPassword" />
                </div>
                <div class="field">
                    <input type="number" id="telefono" name="telefono" required placeholder="Telefono" v-model="inptTelefono" />
                </div>
                <!-- Botón de registro -->
                <div class="field">
                    <input type="submit" value="Registrarse" @click.prevent="handleSubmit"/>
                </div>
                <div class="space">
                    <router-link :to="{ name: 'home' }">
                        <v-btn class="ml-auto" @click="volverAtras">Volver Atras</v-btn>
                    </router-link>
                </div>
            </form>
        </div>
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

    const clearFormRegister = () => {
        inptNombre.value = "";
        inptApellido.value = "";
        inptEmail.value = "";
        inptPassword.value = "";
        inptTelefono.value = "";
    
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
        clearFormRegister();
    }
}).catch(error => {
    console.log(error)
})
}


</script>

<style scoped>
@import '../assets/styles/registerStyle.scss'
</style>