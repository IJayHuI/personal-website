<script setup>
  import { NTimeline, NTimelineItem } from 'naive-ui'
  import { onBeforeMount } from 'vue'
  import { supabase, loading } from '@/main'
  import { log } from '@/services/Home'

  onBeforeMount(async () => {
    if (!log.value.needGetData) return
    loading.value.projectCount++
    const { data, error } = await supabase.functions.invoke('releases')
    if (error) console.error(error)
    else log.value = { datas: data, needGetData: false }
    loading.value.projectCount--
  })
</script>
<template>
  <n-scrollbar class="max-h-60" content-class="grid gap-2">
    <n-button secondary class="whitespace-normal !text-wrap" size="large" tag="a" target="_blank" href="https://github.com/IJayHuI/personal-website/releases/">前往 Github Realeases 查看更详细信息</n-button>
    <n-timeline>
      <template v-for="item in log.datas" :key="item.id">
        <n-timeline-item :type="item.prerelease ? 'warning' : 'success'" v-if="!item.draft" :time="new Date(item.published_at).toLocaleDateString('zh-cn')" :title="`版本：${item.tag_name.slice(1)}`" />
      </template>
    </n-timeline>
  </n-scrollbar>
</template>
