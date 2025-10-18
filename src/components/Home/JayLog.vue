<script setup>
  import { NTimeline, NTimelineItem } from 'naive-ui'
  import { onBeforeMount } from 'vue'
  import { supabase } from '@/main'
  import { log } from '@/services/Home'

  onBeforeMount(async () => {
    if (!log.value.needGetData) return
    const { data, error } = await supabase.from('web_logs').select('*').order('date', { ascending: false })
    if (error) console.error(error)
    else {
      log.value = {
        loadingStatus: false,
        datas: data,
        needGetData: false
      }
    }
  })
</script>
<template>
  <n-spin :show="log.loadingStatus">
    <n-scrollbar class="max-h-60" content-class="grid gap-5">
      <n-button secondary style="word-wrap: break-word; white-space: normal" size="large" tag="a" target="_blank" href="https://github.com/IJayHuI/personal-website/releases/">前往 Github Realeases 查看更详细信息</n-button>
      <n-timeline>
        <n-timeline-item v-for="item in log.datas" :time="item.date">
          <template #default>
            <template v-for="content in item.content">
              <p>· {{ content }}</p>
            </template>
          </template>
        </n-timeline-item>
      </n-timeline>
    </n-scrollbar>
  </n-spin>
</template>
