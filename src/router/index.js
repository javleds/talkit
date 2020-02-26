import Vue from 'vue'
import VueRouter from 'vue-router'

import TalkIt from '../views/TalkIt.vue'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect: '/' },
  {
    path: '/',
    name: 'talk-it',
    component: TalkIt
  },
  {
    path: '/config',
    name: 'config',
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
  },
  {
    path: '/topics',
    name: 'topics',
    component: () => import(/* webpackChunkName: "topics" */ '../views/Topics.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
