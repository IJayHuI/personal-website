<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import { useMessage } from 'naive-ui'

  import JayHeatmap from '../components/home/JayHeatmap.vue'

  import { useStores } from '../stores'

  import { getHeatmapDatas } from '../lib/heatmap'

  const { general, home } = useStores()
  const message = useMessage()

  onBeforeMount(async () => {
    if (!home.needGetHeatmapDatas) return
    general.loadingEventAdd()
    await getHeatmapDatas()
      .then((response) => {
        home.setHeatmapDatas(response.heatmapData)
        home.setHeatmapDatasSum(response.totalContributions)
      })
      .catch(() => {
        message.error('获取热力图数据失败')
      })
      .finally(() => {
        general.loadingEventSubtract()
        home.setNeedGetHeatmapDatas(false)
      })
  })
</script>
<template>
  <jay-heatmap :heatmap-data="home.heatmapDatas" :heatmap-total-contributions="home.heatmapDatasSum" />
</template>
