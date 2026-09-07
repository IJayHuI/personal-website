<script setup lang="ts">
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

onBeforeMount(() => {
  home.fetchHeatmap()
})
</script>
<template>
  <n-card :title="`热力图 · 最近一年 Github 有 ${home.heatmapDatasSum} 提交`" v-interaction :size="props.cardSize">
    <n-scrollbar x-scrollable>
      <div class="min-w-max flex justify-center mb-3">
        <n-heatmap :data="home.heatmapDatas" :size="props.heatmapSize" :fill-calendar-leading="true" />
      </div>
    </n-scrollbar>
  </n-card>
</template>
