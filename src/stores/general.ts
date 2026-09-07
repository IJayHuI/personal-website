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

export const useGeneralStore = defineStore(
  'general',
  () => {
    const isMobile = ref(false)
    const themeMode = ref<ThemeMode>('system')
    const systemPrefersDark = ref(getSystemPrefersDark())
    const loadingCount = ref(0)
    const loadingText = ref('')

    // isDark 由 themeMode 派生，不再手动设置
    const isDark = computed(() => {
      if (themeMode.value === 'dark') return true
      if (themeMode.value === 'light') return false
      return systemPrefersDark.value
    })

    const loading = computed<LoadingState>(() => ({
      status: loadingCount.value > 0,
      count: loadingCount.value,
      text: loadingText.value
    }))

    function setIsMobile(v: boolean) {
      isMobile.value = v
    }
    function setThemeMode(v: ThemeMode) {
      themeMode.value = v
    }
    function setSystemPrefersDark(v: boolean) {
      systemPrefersDark.value = v
    }
    function loadingEventAdd() {
      loadingCount.value += 1
    }
    function loadingEventSubtract() {
      loadingCount.value = Math.max(0, loadingCount.value - 1)
    }
    function loadingEventSetText(text: string) {
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
      loadingEventAdd,
      loadingEventSubtract,
      loadingEventSetText
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
