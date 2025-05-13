import { ref, createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

export const screenWidth = ref(window.innerWidth)
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth
})

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-theme'
      }
    }
  })
  .mount('#app')
