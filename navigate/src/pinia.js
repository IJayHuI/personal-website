import { defineStore } from 'pinia'
import { ref } from 'vue'

// 使用组合式 API 定义一个 store
export const group = defineStore('group', () => {
  const index = ref([])
  return {
    index
  }
})

export const item = defineStore('item', () => {
  const content = ref()

  return {
    content
  }
})
