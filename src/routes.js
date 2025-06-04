import { createRouter, createWebHistory } from 'vue-router'

const config = [
  {
    path: '/',
    name: 'Home',
    desktop: './views/desktop/Home.vue',
    mobile: './views/mobile/Home.vue'
  },
  {
    path: '/navigate',
    name: 'Navigate',
    desktop: './views/desktop/Navigate.vue',
    mobile: './views/mobile/Navigate.vue'
  },
  {
    path: '/project',
    name: 'Project',
    desktop: './views/desktop/Project.vue',
    mobile: './views/mobile/Project.vue'
  }
]

const getRoutes = () => {
  return config.map((route) => ({
    path: route.path,
    name: route.name,
    components: {
      desktop: () => import(route.desktop),
      mobile: () => import(route.mobile)
    }
  }))
}

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes()
})

export default router
