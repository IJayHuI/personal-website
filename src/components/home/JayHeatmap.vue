<script setup lang="ts">
/**
 * Github 贡献热力图卡片
 * 展示最近一年的每日贡献热力图 + 总提交数
 */
import { onBeforeMount } from 'vue'
import { NHeatmap } from 'naive-ui'
import { useHomeStore } from '../../stores'

const home = useHomeStore()

const props = withDefaults(
  defineProps<{
    cardSize?: string
    heatmapSize?: 'small' | 'medium' | 'large'
  }>(),
  {
    cardSize: 'medium',
    heatmapSize: 'large'
  }
)

// 挂载前拉取热力图数据
onBeforeMount(() => {
  home.fetchHeatmap()
})
</script>
<template>
  <n-card v-magnetic :title="`热力图 · 最近一年 Github 有 ${home.heatmapTotal} 提交`" :size="props.cardSize">
    <n-scrollbar x-scrollable>
      <div class="min-w-max flex justify-center mb-3">
        <n-heatmap :data="home.heatmapData" :size="props.heatmapSize" :fill-calendar-leading="true" />
      </div>
    </n-scrollbar>
  </n-card>
</template>
