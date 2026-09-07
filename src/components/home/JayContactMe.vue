<script setup lang="ts">
import { ref } from 'vue'
import { useGeneralStore } from '../../stores'
import homeConfig from '../../configs/home.json'

const general = useGeneralStore()

const expanded = ref<number | null>(null)
let timeoutId: ReturnType<typeof setTimeout> | null = null

const icons = import.meta.glob('/src/assets/contact-me/*.svg', {
  eager: true,
  import: 'default'
})

const handleClick = (index: number, event: MouseEvent) => {
  if (expanded.value !== index) {
    expanded.value = index
    event.preventDefault()
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (expanded.value === index) expanded.value = null
    }, 2000)
  } else {
    if (timeoutId) clearTimeout(timeoutId)
    expanded.value = null
  }
}

const renderIcon = (path: string) => icons[`/src/assets${path}`]
</script>
<template>
  <div v-if="!general.isMobile" class="flex gap-2">
    <n-button tag="a" :href="item.link" target="_blank" class="overflow-hidden !transition-[max-width] !duration-600 !max-w-19.75 hover:!max-w-xl !ease-in-out !text-white" size="large" round v-for="item in homeConfig.contactMe" secondary>
      <div class="flex items-center gap-6">
        <n-icon size="35">
          <component :is="renderIcon(item.icon)" />
        </n-icon>
        <p>{{ item.text }}</p>
      </div>
    </n-button>
  </div>
  <div v-else class="w-full flex justify-center gap-1 overflow-hidden">
    <n-button
      tag="a"
      :href="item.link"
      target="_blank"
      v-for="(item, index) in homeConfig.contactMe"
      :key="index"
      size="medium"
      round
      secondary
      class="overflow-hidden !transition-[max-width] !duration-1000 !max-w-16.5 !ease-in-out !text-white"
      :class="[expanded === index ? '!max-w-xl' : '']"
      @click="handleClick(index, $event)">
      <div class="flex items-center gap-6">
        <n-icon size="30">
          <component :is="renderIcon(item.icon)" />
        </n-icon>
        <p>再点打开 -> {{ item.text }}</p>
      </div>
    </n-button>
  </div>
</template>
