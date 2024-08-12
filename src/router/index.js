import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Diğer rotalar
]

const router = new VueRouter({
  mode: 'hash', // Burada mode ayarını 'hash' yapıyoruz
  routes
})

export default router
