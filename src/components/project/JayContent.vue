<script setup lang="ts">
/**
 * 项目卡片网格
 * 展示所有项目，每个卡片含封面/名称/兼容性/简介 + Github/网页链接
 */
import { useProjectStore } from '../../stores'

const project = useProjectStore()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
    <n-card v-for="item in project.projects" :key="item.id">
      <template #cover>
        <img :src="item.image" :alt="item.name" />
      </template>
      <p class="text-xl font-bold">{{ item.name }}</p>
      <n-space>
        <p>兼容性：{{ item.compatibility }}</p>
        <p>简介：{{ item.introduction }}</p>
      </n-space>
      <template #action>
        <n-space>
          <n-button secondary tag="a" :href="item.githubLink" target="_blank">前往 Github</n-button>
          <n-button
            v-if="item.webLink != null"
            secondary
            type="success"
            tag="a"
            :href="item.webLink"
            target="_blank"
            >打开看看</n-button
          >
        </n-space>
      </template>
    </n-card>
  </div>
</template>
