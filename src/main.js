import { createApp, ref, computed, watch } from 'vue'
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

// 根据主题设置 body 背景色
watch(
  theme,
  (newVal) => {
    if (newVal != null && newVal.name === 'dark') document.body.style.background = 'rgb(16, 16, 20)'
    else document.body.style.background = '#fff'
  },
  { immediate: true }
)

export const baseUrl = {
  background: '/background',
  server: '/server',
  acgBackground: '/acg-background'
}

// 全局加载状态
export const loadingStatus = ref(false)

// 初始化背景类型设置
if (!localStorage.getItem('background-type')) localStorage.setItem('background-type', 'bing')

// 移动端判定
export const isMobile = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

createApp(App).use(router).use(naive).mount('#app')
