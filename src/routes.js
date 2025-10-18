import { createRouter, createWebHistory } from 'vue-router'

const config = [
  {
    path: '/',
    name: 'Home',
    desktop: () => import('./views/desktop/JayHome.vue'),
    mobile: () => import('./views/mobile/Home.vue')
  },
  {
    path: '/navigate',
    name: 'Navigate',
    desktop: () => import('./views/desktop/Navigate.vue'),
    mobile: () => import('./views/mobile/Navigate.vue')
  },
  {
    path: '/project',
    name: 'Project',
    desktop: () => import('./views/desktop/Project.vue'),
    mobile: () => import('./views/mobile/Project.vue')
  }
]

const getRoutes = () => {
  return config.map((route) => ({
    path: route.path,
    name: route.name,
    components: {
      desktop: route.desktop,
      mobile: route.mobile
    }
  }))
}

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes()
})

export default router
