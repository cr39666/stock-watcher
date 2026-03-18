import { createRouter, createWebHashHistory } from 'vue-router'
import FloatingBall from '../views/FloatingBall.vue'
import MainList from '../views/MainList.vue'
import Home from '../views/Home.vue'
import Setting from '../views/Setting.vue'

const routes = [
  {
    path: '/',
    name: 'FloatingBall',
    component: FloatingBall
  },
  {
    path: '/main-list',
    name: 'MainList',
    component: MainList
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
