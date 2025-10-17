import { createApp, ref } from 'vue'
import '@/style.css'
import App from '@/App.vue'

// Supabase 后端
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

import router from '@/routes'
import {
  create,
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
  NMessageProvider,
  NScrollbar,
  NCarousel
} from 'naive-ui'
import 'vfonts/Lato.css'
const naive = create({
  components: [NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent, NSpin, NSpace, NMessageProvider, NScrollbar, NCarousel]
})

// 全局加载状态
export const loadingStatus = ref(false)

// 初始化背景类型设置
if (!localStorage.getItem('background-type')) localStorage.setItem('background-type', 'bing')
// 初始化主题设置
if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'auto')

// 移动端判定
export const isMobile = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

// v-slide-in 指令
import VSlideIn from '@/services/VSlideIn'

createApp(App).directive('slide-in', VSlideIn).use(router).use(naive).mount('#app')
