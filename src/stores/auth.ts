import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { verifyPassword } from '../api/auth'
import type { LoginPayload } from '../types/auth'

/**
 * 认证状态 store
 *
 * 职责：持有 token、过期时间；提供 isAdmin getter 和 login/logout actions
 * 持久化：persist: true，刷新后 token 还在（用户不用重新输密码）
 *   注：token 持久化只是"免重输密码"，后端 Edge Function 每次都要重新校验
 *
 * 阶段 2：骨架已就绪，但 Edge Function 未实现，login() 会失败（预期行为）
 */
export const useAuthStore = defineStore('auth', () => {
  // state
  const token = ref<string | null>(null)
  const expiresAt = ref<number | null>(null)

  // getter：是否管理员
  const isAdmin = computed(() => {
    if (!token.value) return false
    if (expiresAt.value && Date.now() > expiresAt.value) return false
    return true
  })

  // actions
  async function login(payload: LoginPayload) {
    const session = await verifyPassword(payload)
    token.value = session.token
    expiresAt.value = session.expiresAt
  }

  function logout() {
    token.value = null
    expiresAt.value = null
  }

  return { token, expiresAt, isAdmin, login, logout }
}, {
  persist: true
})
