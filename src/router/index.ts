import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import TermsOfService from '../pages/TermsOfService.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsOfService
    }
  ]
})

export default router