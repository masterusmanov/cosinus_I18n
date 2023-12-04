import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Services from '../views/Services/Services.vue'
import Portfolio from '../views/Portfolio/Portfolio.vue'
import About from '../views/About/About.vue'
import Bogla from '../views/Bogla/Bogla.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/bogla',
      name: 'bogla',
      component: Bogla
    },
  ]
})

export default router
