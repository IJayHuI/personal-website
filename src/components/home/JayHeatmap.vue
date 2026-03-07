<script setup lang="ts">
  import { NHeatmap } from 'naive-ui'

  import { type HeatmapData } from '../../stores'

  const props = withDefaults(
    defineProps<{
      cardSize?: string
      heatmapSize?: 'small' | 'medium' | 'large'
      heatmapData?: HeatmapData[]
      heatmapTotalContributions?: number
    }>(),
    {
      cardSize: 'medium',
      heatmapSize: 'large',
      heatmapData: () => [],
      heatmapTotalContributions: 0
    }
  )
</script>
<template>
  <n-card :title="`热力图 · 最近一年 Github 有 ${props.heatmapTotalContributions} 提交`" class="interaction" :size="props.cardSize" @touchstart="">
    <n-scrollbar x-scrollable>
      <div class="min-w-max flex justify-center">
        <n-heatmap :data="props.heatmapData" :size="props.heatmapSize" :fill-calendar-leading="true" />
      </div>
    </n-scrollbar>
  </n-card>
</template>
