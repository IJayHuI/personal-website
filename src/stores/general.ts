import { defineStore } from 'pinia'

/**
 * 通用 UI 状态 store
 *
 * 阶段 2：仅创建空壳，未填充 state/actions
 * 阶段 3 将填充：
 *   - state: isMobile / themeMode / isDark / loadingCount / loadingText
 *   - actions: setThemeMode / setIsDark / loadingEventAdd / loadingEventSubtract
 *   - 持久化: themeMode
 */
export const useGeneralStore = defineStore('general', () => {
  return {}
})
