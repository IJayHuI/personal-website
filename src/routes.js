import { createRouter, createWebHistory } from 'vue-router'

const config = [
  {
    path: '/',
    name: 'Home',
    desktop: './views/desktop/Home.vue',
    mobile: './views/mobile/Home.vue'
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
