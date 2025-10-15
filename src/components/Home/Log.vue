<script setup>
  import { NTimeline, NTimelineItem } from 'naive-ui'
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/main'

  const timelineData = ref([])
  const loadingStatus = ref(false)
  onMounted(async () => {
    loadingStatus.value = true
    const { data, error } = await supabase.from('web_logs').select('*').order('date', { ascending: false })
    if (error) console.error(error)
    else {
      loadingStatus.value = false
      timelineData.value = data
    }
  })
</script>
<template>
  <n-spin style="height: 100%" :show="loadingStatus">
    <div style="display: grid; gap: 20px">
      <n-button size="large" tag="a" target="_blank" href="https://github.com/IJayHuI/personal-website/releases/">前往 Github Realeases 查看更详细信息</n-button>
      <n-timeline>
        <n-timeline-item v-for="item in timelineData" :time="item.date">
          <template #default>
            <template v-for="content in item.content">
              <p>· {{ content }}</p>
            </template>
          </template>
        </n-timeline-item>
      </n-timeline>
    </div>
  </n-spin>
</template>
