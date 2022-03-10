import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import HomeOne from '@/components/HomeOne.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/homepage' },
  {
    path: '/homepage',
    component: Homepage,
    redirect: '/homepage/homeone',
    children: [
      { path: 'homeone', component: HomeOne }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
