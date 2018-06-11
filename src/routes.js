import Login from './componentes/login.vue'
import Home from './componentes/Home.vue'

export default [
    { path: '/login', component: Login, name: 'login' },
    { path: '/', component: Home, name: 'home' },
  ]