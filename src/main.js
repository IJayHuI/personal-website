import { createApp, ref, computed } from 'vue'
import '@/style.css'
import App from '@/App.vue'

import router from '@/routes'
import {
  create,
  darkTheme,
  useOsTheme,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NCard,
  NIcon,
  NMenu,
  NCollapse,
  NCollapseItem,
  NButton,
  NDrawer,
  NDrawerContent,
  NSpin,
  NSpace,
  NMessageProvider
} from 'naive-ui'
import 'vfonts/Lato.css'
const naive = create({
  components: [NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent, NSpin, NSpace, NMessageProvider]
})

// 主题
const osTheme = useOsTheme()
export const themeMode = ref(localStorage.getItem('theme') || 'auto')
export const theme = computed(() => {
  localStorage.setItem('theme', themeMode.value)
  if (themeMode.value === 'auto') {
    return osTheme.value === 'dark' ? darkTheme : null
  }
  return themeMode.value === 'dark' ? darkTheme : null
})

export const baseUrl = {
  background: '/background',
  server: '/server'
}

export const loadingStatus = ref(false)

// 是否移动端
export const isMobile = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

createApp(App).use(router).use(naive).mount('#app')
