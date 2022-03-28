import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

//importaciones componentes
import Inicio from '../components/Inicio.vue'
import Estudiantes from '../components/Estudiantes.vue'
import Club from '../components/Club.vue'

//imoprt vic
//import Login from '../components/sesion/Login.vue'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'login',
    component: Login
  },*/
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  
  {
    path: '/club',
    name: 'Clubs',
    component: Club
  },
  {
    path: '/estudiantes',
    name: 'Estudaintes',
    component: Estudiantes
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
