import { ref } from 'vue';
class AuthService {
    constructor() {
        this.jwt = ref("")
    }

    getJwt() {
        return this.jwt
    }

    async login(email, password) {
        try {
            const res = await fetch(`${process.env.API}/auth/login`, {
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
}