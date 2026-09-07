<script setup lang="ts">
/**
 * 更新日志时间线
 * 展示 Github Releases 版本日志（水平时间线）
 */
import { onBeforeMount } from 'vue'
import { NTimeline, NTimelineItem } from 'naive-ui'
import { useHomeStore } from '../../stores'

const home = useHomeStore()

// 挂载前拉取日志数据
onBeforeMount(() => {
  home.fetchLogs()
})
</script>
<template>
  <div class="flex flex-col gap-2">
    <n-button secondary class="!w-full whitespace-normal !text-wrap" size="large" tag="a" target="_blank" href="https://github.com/IJayHuI/personal-website/releases/">前往 Github Realeases 查看更详细信息</n-button>
    <n-scrollbar x-scrollable>
      <div class="w-max">
        <n-timeline horizontal class="mb-3">
          <template v-for="item in home.logs" :key="item.id">
            <n-timeline-item :type="item.prerelease ? 'warning' : 'success'" v-if="!item.draft" :time="new Date(item.publishedAt).toLocaleDateString('zh-cn')" :title="`版本：${item.tagName.slice(1)}`" />
          </template>
        </n-timeline>
      </div>
    </n-scrollbar>
  </div>
</template>
