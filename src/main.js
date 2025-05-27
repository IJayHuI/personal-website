import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes'
import { create, NCard } from 'naive-ui'
import 'vfonts/Lato.css'
const naive = create({
  components: [NCard]
})

export const isMobile = ref(window.innerWidth < 768)
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

createApp(App).use(router).use(naive).mount('#app')
