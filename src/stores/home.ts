import { defineStore } from 'pinia'
import { ref } from 'vue'

export type BackgroundMode = 'local' | 'bing'

export const useHomeStore = defineStore(
  'home',
  () => {
    // 壁纸
    const backgroundMode = ref<BackgroundMode>('bing')
    const backgroundSrc = ref<string>('')
    const needGetBackground = ref<boolean>(true)

    // 头像
    const avatarSrc = ref<string>('')
    const avatarRotateStatus = ref<boolean>(false)
    const avatarClickCount = ref<number>(0)
    const avatarBackText = ref<string>('')

    function setBackgroundMode(v: BackgroundMode) {
      backgroundMode.value = v
    }
    function setBackgroundSrc(v: string) {
      backgroundSrc.value = v
    }
    function setNeedGetBackground(v: boolean) {
      needGetBackground.value = v
    }
    function setAvatarSrc(v: string) {
      avatarSrc.value = v
    }
    function setAvatarRotateStatus(v: boolean) {
      avatarRotateStatus.value = v
    }
    function avatarClickCountAdd() {
      avatarClickCount.value++
    }
    function setAvatarBackText(v: string) {
      avatarBackText.value = v
    }

    return {
      backgroundMode,
      backgroundSrc,
      needGetBackground,

      avatarSrc,
      avatarRotateStatus,
      avatarClickCount,
      avatarBackText,

      setBackgroundMode,
      setBackgroundSrc,
      setNeedGetBackground,

      setAvatarSrc,
      setAvatarRotateStatus,
      avatarClickCountAdd,
      setAvatarBackText
    }
  },
  {
    persist: {
      key: 'home-store',
      storage: localStorage,
      pick: ['backgroundMode']
    }
  }
)
