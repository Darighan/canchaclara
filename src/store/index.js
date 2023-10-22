import { createStore } from 'vuex'

export default createStore({
state:{
    //Datos
    counter: 1,
    jwt: '',
    error: '',
},
getters: {
    //Datos Computados
    times2(state){
        return state.counter * 2
    }
    
},
mutations: {
    //set sync
    setCounter(state, value){
        state.counter = value;
    }
},
actions: {
    //set async ejemplo consumir apis
    async login(email, password) {
        try {
            const res = await fetch("https://becanchaclara-production.up.railway.app/auth/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const response = await res.json()

            if('errors' in response){
                this.error = "Login failed"
                return false
            }

            this.jwt = response.data.access_token
            return true


        } catch (error) {
            console.log(error)
        }
    }
},  
modules: {  
    //subdivide the store
}
})