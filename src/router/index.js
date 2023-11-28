import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import { useStore } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'inicio' },
    component: () => import("../layout/NormalLayout.vue"),
    children: [
      {
        path: '/inicio',
        name: 'inicio',
        component: () => import("../views/HomeView.vue")
      },

      {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
      },
      {
        path: '/loginEmpresa',
        name: 'loginEmpresa',
        component: () => import('../views/LoginEmpresasView.vue')
      },
      {
        path: '/loginAdministracion',
        name: 'loginAdministracion',
        component: () => import('../views/LoginAdministracionView.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue')
      }
    ]
  },
  {
    path: '/arriendos',
    name: 'arriendos',
    redirect: { name: 'arriendosHome' },
    component: () => import('../layout/LayoutArriendos.vue'),
    children: [
      {
        path: '/arriendosHome',
        name: 'arriendosHome',
        component: () => import('../views/Arriendos/ArriendosHomeView.vue'),
        meta: {
          isAuth: true
        }
      },
      {
        path: '/misReservas',
        name: 'misReservas',
        component: () => import('../views/Arriendos/MisReservasView.vue'),
        meta: {
          isAuth: true
        }
      },
      {
        path: '/agendarArriendos',
        name: 'agendarArriendos',
        component: () => import('../views/Arriendos/TestArriendos.vue'),
        meta: {
          isAuth: true
        }
      },
      {
        path: '/verCanchas',
        name: 'verCanchas',
        component: () => import('../views/Arriendos/VerCanchasView.vue'),
        meta: {
          isAuth: true
        }
      },
      {
        path: '/inscripcionTorneos',
        name: 'inscripcionTorneos',
        component: () => import('../views/Arriendos/InscripcionTorneosView.vue'),
        meta: {
          isAuth: true
        }
      },
      {
        path: '/gestionPerfil',
        name: 'gestionPerfil',
        component: () => import('../views/Arriendos/GestionPerfilView.vue'),
        meta: {
          isAuth: true
        }
      }
    ]

  },
  {
    path: '/empresas',
    name: 'empresas',
    redirect: { name: 'empresasHome' },
    component: () => import('../layout/LayoutEmpresas.vue'),
    isAuthEmpresa: true,
    children: [
      {
        path: '/empresasHome',
        name: 'empresasHome',
        component: () => import('../views/Empresas/EmpresasHomeView.vue'),
        meta: {
          isAuthEmpresa: true
        }
      },
      {
        path: '/gestionarReservasEmpresas',
        name: 'gestionarReservasEmpresas',
        component: () => import('../views/Empresas/GestionarReservasEmpresasView.vue'),
        meta: {
          isAuthEmpresa: true
        }
      },
      {
        path: '/creacionTorneos',
        name: 'creacionTorneos',
        component: () => import('../views/Empresas/CreacionTorneosView.vue'),
        isAuthEmpresa: true
      }
    ]

  },
  {
    path: '/administracion',
    name: 'administracion',
    redirect: { name: 'administracionHome' },
    component: () => import('../layout/LayoutAdministracion.vue'),
    children: [
      {
        path: '/administracionHome',
        name: 'administracionHome',
        component: () => import('../views/Administracion/AdministracionHomeView.vue'),
        meta: {
          isAuthAdministrador: true
        }
      },
      {
        path: '/verEmpresasView',
        name: 'empresasView',
        component: () => import('../views/Administracion/VerEmpresasView.vue'),
        meta: {
          isAuthAdministrador: true
        }
      },
      {
        path: '/verUsuariosView',
        name: 'usuariosView',
        component: () => import('../views/Administracion/VerUsuariosView.vue'),
        meta: {
          isAuthAdministrador: true
        }
      },
      {
        path: '/estadisticasAdministracionView',
        name: 'estadisticasAdministracionView',
        component: () => import('../views/Administracion/VisualizarEstadisticasAdministracionView.vue'),
        meta: {
          isAuthAdministrador: true
        }
      },
      {
        path: '/usoSistemaAdministracionView',
        name: 'usoSistemaAdministracionView',
        component: () => import('../views/Administracion/UsoSistemaAdministracionView.vue'),
        meta: {
          isAuthAdministrador: true
        }
      }
    ]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {
      isAuth: true
    }
  },
  {
    path: '/secreta',
    name: 'secreta',
    component: () => import('../views/VistaSecreta.vue'),
    meta: {
      isAuth: true
    }
  },
  {
    path: '/deportes',
    name: 'deportes',
    component: () => import('../views/ClientHomeView.vue'),
    meta: {
      isAuth: true
    }

  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.isAuth) {
    const store = useStore()
    const verifyToken = await store.dispatch('verifyToken')
    console.log(verifyToken)
    if (localStorage.getItem('token') && verifyToken.msg == "Token valido") {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.isAuthEmpresa) {
    const store = useStore()
    const verifyToken = await store.dispatch('verifyTokenEmpresa')
    console.log(verifyToken)
    if (localStorage.getItem('token') && verifyToken.msg == "Token valido") {
      next()
    } else {
      next('/loginEmpresa')
    }
  } else {
    next()
  }
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.isAuthAdministrador) {
    const store = useStore()
    const verifyToken = await store.dispatch('verifyTokenAdministracion')
    console.log(verifyToken)
    if (localStorage.getItem('token') && verifyToken.msg == "Token valido") {
      next()
    } else {
      next('/loginAdministracion')
    }
  } else {
    next()
  }
})




export default router
