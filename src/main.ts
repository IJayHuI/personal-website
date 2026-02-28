import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { create, NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent, NSpin, NSpace, NMessageProvider, NScrollbar, NCarousel } from 'naive-ui'
import 'vfonts/Lato.css'
const naive = create({
  components: [NConfigProvider, NLayout, NLayoutContent, NLayoutFooter, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent, NSpin, NSpace, NMessageProvider, NScrollbar, NCarousel]
})

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(naive).use(pinia).mount('#app')
