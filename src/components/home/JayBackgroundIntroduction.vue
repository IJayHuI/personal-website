<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      backgroundSrc: string
      cardSize?: string
    }>(),
    {
      backgroundSrc: '',
      cardSize: 'medium'
    }
  )
</script>
<template>
  <n-card :size="props.cardSize" class="interaction" title="背景" @touchstart="">
    <p class="text-base font-bold">下划查看清晰图片。</p>
    <p>本站使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。</p>
    <template #action>
      <n-space>
        <n-button secondary round tag="a" target="_blank" href="https://www.todaybing.com/">前往必应壁纸查看更多</n-button>
        <n-button secondary round tag="a" target="_blank" :href="props.backgroundSrc">全屏打开背景</n-button>
      </n-space>
    </template>
  </n-card>
</template>
