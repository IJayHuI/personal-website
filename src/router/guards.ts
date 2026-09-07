import type { Router } from 'vue-router'
import { useAuthStore } from '../stores/auth'

/**
 * 路由守卫：拦截标记了 meta.requiresAdmin 的路由
 *
 * 阶段 2：所有路由都不要求管理员权限，守卫逻辑写好但暂时不触发
 * 阶段 4 迁移 home 模块时，按需给路由加 meta: { requiresAdmin: true }
 *
 * 未登录访问受保护路由 → 跳转登录页，登录后回到原路由
 */
export function setupRouterGuards(router: Router) {
  router.beforeEach((to) => {
    if (to.meta.requiresAdmin) {
      const auth = useAuthStore()
      if (!auth.isAdmin) {
        return { name: 'Login', query: { redirect: to.fullPath } }
      }
    }
    return true
  })
}
