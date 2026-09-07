<script setup lang="ts">
/**
 * 一言组件
 * 展示一句随机文字 + 出处，数据来自 hitokoto Edge Function
 */
import { onBeforeMount } from 'vue'
import { useHomeStore } from '../../stores'

const home = useHomeStore()

const props = withDefaults(
  defineProps<{
    hitokotoSize?: string
    fromSize?: string
  }>(),
  {
    hitokotoSize: 'text-xl',
    fromSize: 'text-base'
  }
)

// 挂载前拉取一言数据
onBeforeMount(() => {
  home.fetchYiYan()
})
</script>
<template>
  <p :class="props.hitokotoSize">{{ home.hitokoto }}</p>
  <p :class="`text-end ${props.fromSize}`">- {{ home.yiYanSource }}</p>
</template>
