import { createApp, ref, computed } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes'
import { create, darkTheme, useOsTheme, NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent } from 'naive-ui'
import 'vfonts/Lato.css'
const naive = create({
  components: [NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent]
})

// 主题
const osTheme = useOsTheme()
export const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))

// 是否移动端
export const isMobile = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

createApp(App).use(router).use(naive).mount('#app')
