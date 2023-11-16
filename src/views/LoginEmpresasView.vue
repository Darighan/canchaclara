<template>
    <div class="bg-img-empresa">
        <div class="content">
            <header> Login Empresas</header>
            <form action="#">
                <div class="field">
                    <span class="fas fa-user"></span>
                    <input type="text" required placeholder="Ingrese su Correo" v-model="email" />
                </div>
                <div class="field space">
                    <span class="fas fa-lock"></span>
                    <input :type="passwordType" class="pass-key" required placeholder="Ingrese su Contraseña"
                        v-model="password" />
                    <span class="show" @click="togglePassword"> {{ buttonText }} </span>
                </div>
                <div class="pass">
                    <a href="#">Olvidaste la contraseña?</a>
                </div>
                <div class="register">
                    <router-link :to="{ name: 'register' }">
                        <a>Registrate!</a>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{ name: 'home' }">
                        <v-btn class="ml-auto" @click="volverAtras">Volver Atras</v-btn>
                    </router-link>
                </div>
                <div class="field">
                    <input type="submit" value="Login" @click.prevent="handleSubmit" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';
import { showToast } from '@/utils/toast';
import router from '@/router';

const email = ref("");
const password = ref("");
const isLoad = ref(false);
const isButtonDisabled = ref(false);
const store = useStore();
const handleSubmit = async () => {
    isLoad.value = true;
    isButtonDisabled.value = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!emailRegex.test(email.value.trim())) {
        showToast('Porfavor ingresar un email valido', 'danger', 'red')
        isLoad.value = false;
        isButtonDisabled.value = false;
        return;

    }

    try {
        const res = await store.dispatch('loginEmpresa', {
            email: email.value,
            password: password.value
        })

        if (Object.prototype.hasOwnProperty.call(res, 'message')) {
            isLoad.value = false;
            isButtonDisabled.value = false;
            if (res.message == 'Password Incorrecto') {
                showToast('Password Incorrecto', 'danger', 'red')
            } else {
                showToast('Acceso Denegado', 'danger', 'red')
            }
            return;
        }
        showToast('Bienvenido a Cancha Clara', 'success', 'green')
        isLoad.value = false;
        isButtonDisabled.value = false;
        router.push('/empresas')

    } catch (error) {
        console.log(error)
    }


}

const showPassword = ref(false)
const passwordType = computed(() => showPassword.value ? 'text' : 'password')
const buttonText = computed(() => showPassword.value ? 'Hidden' : 'Show')
const togglePassword = () => {
    showPassword.value = !showPassword.value
}
const volverAtras = () => {
    console.log('Pa atras mi pana')
}

</script>

<style scoped  >
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Poppins:400,500&display=swap");
@import '../assets/styles/loginEmpresaStyle.scss'
</style>