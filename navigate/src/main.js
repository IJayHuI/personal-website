import { ref, createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import DialogService from 'primevue/dialogservice'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

export const screenWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth
})

createApp(App)
  .use(DialogService)
  .use(createPinia())
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-theme'
      }
    }
  })
  .mount('#app')
