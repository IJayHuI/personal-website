<script setup>
  import { onBeforeMount } from 'vue'
  import { supabase } from '@/main'
  import { NHeatmap } from 'naive-ui'
  import { heatmap } from '@/services/Home'

  onBeforeMount(async () => {
    if (!heatmap.value.needGetData) return
    const { data, error } = await supabase.functions.invoke('heatmap')
    if (error) console.error(error)
    else {
      heatmap.value = {
        loadingStatus: false,
        totalContributions: data.totalContributions,
        heatmapData: data.heatmapData,
        needGetData: false
      }
    }
  })
</script>
<template>
  <n-card v-slide-in :title="`最近一年有${heatmap.totalContributions}次贡献`" class="interaction" size="huge" @touchstart="">
    <n-scrollbar x-scrollable class="max-w-full" content-class="flex justify-center">
      <n-heatmap :data="heatmap.heatmapData" :loading-data="heatmap.heatmapData" :loading="heatmap.loadingStatus" size="large" :fill-calendar-leading="true" />
    </n-scrollbar>
  </n-card>
</template>
