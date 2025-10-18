<script setup>
import { ref } from 'vue'
import { contactMe, background } from '@/services/Home'

const expanded = ref(null)
let timeoutId = null

const handleClick = (item, index, event) => {
  if (expanded.value !== index) {
    expanded.value = index
    event.preventDefault()

    // 清除上一个定时器
    if (timeoutId) clearTimeout(timeoutId)

    // 两秒后自动收起
    timeoutId = setTimeout(() => {
      if (expanded.value === index) {
        expanded.value = null
      }
    }, 2000)
  } else {
    // 第二次点击：清除定时器并跳转
    clearTimeout(timeoutId)
    expanded.value = null
  }
}
</script>

<template>
  <n-button
    tag="a"
    :href="item.link"
    target="_blank"
    v-for="(item, index) in contactMe"
    :key="index"
    size="large"
    round
    secondary
    class="overflow-hidden !transition-[max-width] !duration-1000 !max-w-18.5 ease-in-out"
    :class="[
      `!text-${background.fontColor}`,
      expanded === index ? '!max-w-xl' : ''
    ]"
    @click="(e) => handleClick(item, index, e)"
  >
    <div class="flex items-center gap-6">
      <n-icon size="30">
        <div v-html="item.icon"></div>
      </n-icon>
      <p>再点打开 -> {{ item.text }}</p>
    </div>
  </n-button>
</template>