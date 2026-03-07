<script setup lang="ts">
  import { NTimeline, NTimelineItem } from 'naive-ui'

  import { type LogData } from '../../stores'

  const porps = withDefaults(
    defineProps<{
      datas: LogData[]
    }>(),
    {}
  )
</script>
<template>
  <n-scrollbar class="max-h-60" content-class="grid gap-2">
    <n-button secondary class="whitespace-normal !text-wrap" size="large" tag="a" target="_blank" href="https://github.com/IJayHuI/personal-website/releases/">前往 Github Realeases  <br />查看更详细信息</n-button>
    <n-timeline>
      <template v-for="item in porps.datas" :key="item.id">
        <n-timeline-item :type="item.prerelease ? 'warning' : 'success'" v-if="!item.draft" :time="new Date(item.publishedAt).toLocaleDateString('zh-cn')" :title="`版本：${item.tagName.slice(1)}`" />
      </template>
    </n-timeline>
  </n-scrollbar>
</template>
