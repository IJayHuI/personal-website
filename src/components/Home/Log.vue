<script setup>
  import { NTimeline, NTimelineItem } from 'naive-ui'
  import axios from 'axios'
  import { ref } from 'vue'
  import { baseUrl } from '../../main'

  const timelineData = ref([])
  const loadingStatus = ref(false)

  const getData = () => {
    loadingStatus.value = true
    axios
      .get(`${baseUrl.server}/web-logs?sort=date:desc&fields[0]=date&fields[1]=content`)
      .then((response) => {
        timelineData.value = response.data.data
        loadingStatus.value = false
      })
      .catch((error) => {
        console.error(error)
      })
  }
  getData()
</script>
<template>
  <n-spin style="height: 100%" :show="loadingStatus">
    <n-timeline>
      <n-timeline-item v-for="item in timelineData" :time="item.date">
        <template #default>
          <div v-html="item.content"></div>
        </template>
      </n-timeline-item>
    </n-timeline>
  </n-spin>
</template>
