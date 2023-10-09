import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Manage from '../views/Manage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
