import Vue from 'vue'
import VueRouter from 'vue-router'

import TalkIt from '../views/TalkIt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'talk_it',
    component: TalkIt
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
