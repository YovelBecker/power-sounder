import Vue from 'vue'
import VueRouter from 'vue-router'
import SoundPage from '../views/SoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'soundPage',
    component: SoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
