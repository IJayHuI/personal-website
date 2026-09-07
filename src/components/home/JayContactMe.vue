<script setup lang="ts">
/**
 * 联系方式组件
 * 展示联系方式按钮（邮箱/Github等），点击展开显示文字，2秒后自动收起
 * 桌面端：hover 展开；移动端：点击展开
 */
import { ref } from 'vue'
import { useGeneralStore } from '../../stores'
import homeConfig from '../../configs/home.json'

const general = useGeneralStore()

// 当前展开的按钮索引（null 表示全部收起）
const expanded = ref<number | null>(null)
let timeoutId: ReturnType<typeof setTimeout> | null = null

// 预加载所有联系方式 svg 图标
const icons = import.meta.glob('/src/assets/contact-me/*.svg', {
  eager: true,
  import: 'default'
})

// 移动端点击切换展开状态，展开后 2 秒自动收起
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

// 根据图标路径从预加载资源中取出组件
const renderIcon = (path: string) => icons[`/src/assets${path}`]
</script>
<template>
  <div v-if="!general.isMobile" class="flex gap-2">
    <n-button v-magnetic tag="a" :href="item.link" target="_blank" class="overflow-hidden !transition-[max-width] !duration-600 !max-w-19.75 hover:!max-w-xl !ease-in-out !text-white" size="large" round v-for="item in homeConfig.contactMe" secondary>
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
