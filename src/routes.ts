import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./containers/home/JayHome.vue')
  },
  {
    path: '/navigate',
    name: 'Navigate',
    component: () => import('./containers/navigate/JayNavigate.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('./containers/JayProject.vue')
  }
]

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
