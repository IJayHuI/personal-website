import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type LoadingState = {
  status: boolean
  count: number
  text: string
}
export type ThemeMode = 'light' | 'system' | 'dark'

export const useGeneralStore = defineStore(
  'general',
  () => {
    const isMobile = ref<boolean>(false)
    const themeMode = ref<ThemeMode>('system')
    const isDark = ref<boolean>(false)
    const loadingCount = ref<number>(0)
    const loadingText = ref<string>('')
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
    function setIsDark(v: boolean) {
      isDark.value = v
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
      isDark,
      loadingCount,
      loadingText,
      loading,
      setIsMobile,
      setThemeMode,
      setIsDark,
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
