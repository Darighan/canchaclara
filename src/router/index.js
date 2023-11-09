import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import { useStore } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../layout/LayoutArriendos.vue"),
    children:[
      {
        path: '/testView',
        name:'testView',
        component: () => import ("../views/Arriendos/testView.vue")
      },
      {
        path: '/register',
        name: 'register2',
        component: () => import('../views/RegisterView.vue')
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
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')

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
  {
    path: '/empresa',
    name: 'empresa',
    component: () => import('../views/EmpresaView.vue'),
  }



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

export default router
