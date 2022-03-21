import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import HomeOne from '@/components/HomeOne.vue'
import ComponentSubject from '@/components/ComponentSubject.vue'
import Banner from '@/components/Banner.vue'
import Button from '@/components/Button.vue'
import TestBefore from '@/components/TestBefore.vue'
import TestAfter from '@/components/TestAfter.vue'
import Input from '@/components/Input.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/homepage' },
  {
    path: '/homepage',
    component: Homepage,
    redirect: '/homepage/homeone',
    children: [
      { path: 'homeone', component: HomeOne },
      {
        path: 'componentSubject',
        component: ComponentSubject,
        redirect: '/homepage/componentSubject/button',
        children: [
          { path: 'button', component: Button },
          { path: 'banner', component: Banner },
          { path: 'input', component: Input },
          { path: 'testBefore', component: TestBefore },
          { path: 'testAfter', component: TestAfter }
        ]
      }
    ]
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
