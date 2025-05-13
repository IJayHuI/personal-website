import { defineStore } from 'pinia'
import { ref } from 'vue'

// 使用组合式 API 定义一个 store
export const theme = defineStore('theme', () => {
  const theme = ref('followSystem')
  return { theme }
})

export const loadProject = defineStore('loadProject', () => {
  const backgroundImg = ref({ tag: false, type: '', text: '' })
  const interfaceLoading = ref(false)
  return { backgroundImg, interfaceLoading }
})

export const backgroundSrc = defineStore('backgroundSrc', () => {
  const src = ref('')
  return { src }
})
