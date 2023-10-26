import { createStore } from 'vuex'

export default createStore({
    state: {
        //Datos
        counter: 1,
        user: null,
        rol: null,

    },
    getters: {
        //Datos Computados
        times2(state) {
            return state.counter * 2
        }

    },
    mutations: {
        //set sync
        setCounter(state, value) {
            state.counter = value;
        },
        setUser(state, value) {
            state.user = value;
        },
        setRol(state, value) {
            state.rol = value;
        }
    },
    actions: {
        //set async ejemplo consumir apis
        async login({ commit }, { email, password }) {
            try {
                const res = await fetch(
                    'https://becanchaclara-production.up.railway.app/auth/login',
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    })

                if (res.ok) {
                    const user = await res.json()
                    console.log(user)
                    localStorage.setItem('token', user.token)

                    commit('setUser', localStorage.getItem('token'))
                    return user
                } else {

                    const err = await res.json()

                    return err
                }


            } catch (error) {
                console.log(error)
            }
        },

        async verifyToken() {
            try {
                const res = await fetch(
                    'https://becanchaclara-production.up.railway.app/auth/verifyToken',
                    {
                        method: 'GET',
                        headers: {
                            'x-token': localStorage.getItem('token'),
                            Accept: '*/*',
                        },
                    },
                )
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        },
    },
    modules: {
        //subdivide the store
    }
})