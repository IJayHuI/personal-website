import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  { path: '/', component: () => import('/src/views/Home.vue') },
  { path: '/navigates', component: () => import('/src/views/Navigates.vue') },
  { path: '/demos', component: () => import('/src/views/Demos.vue') },
  { path: '/logs', component: () => import('/src/views/Logs.vue') },
  { path: '/about', component: () => import('/src/views/About.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
