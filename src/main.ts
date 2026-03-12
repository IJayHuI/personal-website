import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {
  create,
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
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
  components: [NConfigProvider, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NLayoutSider, NCard, NIcon, NMenu, NCollapse, NCollapseItem, NButton, NDrawer, NDrawerContent, NSpin, NSpace, NMessageProvider, NScrollbar, NCarousel]
})

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import router from './routes'

import slideIn from './directives/slide-in'

createApp(App).use(router).use(naive).use(pinia).directive('slide-in', slideIn).mount('#app')
