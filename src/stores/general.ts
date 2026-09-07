import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { ThemeMode } from '../types/theme'
import { getSystemPrefersDark } from '../utils/theme-mode'

// LoadingState 是 store 内部派生结构，不进 types
type LoadingState = {
  status: boolean
  count: number
  text: string
}

/**
 * 全局通用 store
 *
 * 职责：
 * - 设备类型（isMobile）：由 JayGui 监听窗口尺寸变化同步
 * - 主题模式（themeMode）：light / dark / system，持久化到 localStorage
 * - 是否深色（isDark）：由 themeMode + 系统偏好派生（computed，无需手动设置）
 * - 全局加载状态（loading）：各 store 的 fetch action 通过 startLoading/stopLoading 增减计数
 */
export const useGeneralStore = defineStore(
  'general',
  () => {
    // --- state ---

    // 是否移动端（由 JayGui 根据窗口宽度同步）
    const isMobile = ref(false)
    // 主题模式：light / dark / system
    const themeMode = ref<ThemeMode>('system')
    // 系统是否偏好深色（仅 themeMode === 'system' 时生效）
    const systemPrefersDark = ref(getSystemPrefersDark())
    // 加载计数（>0 表示正在加载，支持多请求并发）
    const loadingCount = ref(0)
    // 加载提示文字
    const loadingText = ref('')

    // --- getters ---

    // 是否深色主题：由 themeMode 派生，system 时跟随系统偏好
    const isDark = computed(() => {
      if (themeMode.value === 'dark') return true
      if (themeMode.value === 'light') return false
      return systemPrefersDark.value
    })

    // 加载状态派生对象（status/count/text）
    const loading = computed<LoadingState>(() => ({
      status: loadingCount.value > 0,
      count: loadingCount.value,
      text: loadingText.value
    }))

    // --- actions ---

    // 设置是否移动端
    function setIsMobile(v: boolean) {
      isMobile.value = v
    }
    // 设置主题模式
    function setThemeMode(v: ThemeMode) {
      themeMode.value = v
    }
    // 设置系统深色偏好（仅 themeMode === 'system' 时由 JayGui 同步）
    function setSystemPrefersDark(v: boolean) {
      systemPrefersDark.value = v
    }
    // 开始加载（计数 +1）
    function startLoading() {
      loadingCount.value += 1
    }
    // 结束加载（计数 -1，最低为 0）
    function stopLoading() {
      loadingCount.value = Math.max(0, loadingCount.value - 1)
    }
    // 设置加载提示文字
    function setLoadingText(text: string) {
      loadingText.value = text
    }

    return {
      isMobile,
      themeMode,
      systemPrefersDark,
      isDark,
      loadingCount,
      loadingText,
      loading,

      setIsMobile,
      setThemeMode,
      setSystemPrefersDark,
      startLoading,
      stopLoading,
      setLoadingText
    }
  },
  {
    persist: {
      key: 'general-store',
      storage: localStorage,
      pick: ['themeMode']
    }
  }
)
