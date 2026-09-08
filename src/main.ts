import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
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
  NCarousel,
  NTimeline,
  NTimelineItem,
  NHeatmap,
  NAvatar,
  NInput,
  NImageGroup
} from 'naive-ui'
import 'vfonts/Lato.css'
import router from './router'
import slideIn from './directives/slide-in'
import magnetic from './directives/magnetic'
import interaction from './directives/interaction'
import App from './App.vue'
import './style.css'

// Pinia 实例 + 持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// Naive UI 按需注册组件
const naive = create({
  components: [
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
    NCarousel,
    NTimeline,
    NTimelineItem,
    NHeatmap,
    NAvatar,
    NInput,
    NImageGroup
  ]
})

createApp(App)
  .use(pinia)
  .use(router)
  .use(naive)
  .directive('slide-in', slideIn)
  .directive('magnetic', magnetic)
  .directive('interaction', interaction)
  .mount('#app')
