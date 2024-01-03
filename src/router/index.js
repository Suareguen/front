import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListStudents from '../views/ListStudents.vue'
import ListLabs from '../views/ListLabsView.vue'
import Login from '../views/LoginView.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/students',
    name: 'students',
    component: ListStudents
  },
  {
    path: '/labs',
    name: 'labs',
    component: ListLabs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
