import { createRouter, createWebHashHistory } from 'vue-router'
import FloatingBall from '../views/FloatingBall.vue'
import MainList from '../views/MainList.vue'
import About from '../views/About.vue'
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
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
