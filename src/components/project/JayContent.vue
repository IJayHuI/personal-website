<script setup lang="ts">
  import type { Project } from '../../stores'

  const props = withDefaults(
    defineProps<{
      datas: Project[]
    }>(),
    {
      datas: () => []
    }
  )
</script>
<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mb-4">
    <n-card v-for="project in datas">
      <template #cover>
        <img :src="project.image" :alt="project.name" />
      </template>
      <p class="text-xl font-bold">{{ project.name }}</p>
      <n-space>
        <p>兼容性：{{ project.compatibility }}</p>
        <p>简介：{{ project.introduction }}</p>
      </n-space>
      <template #action>
        <n-space>
          <n-button secondary tag="a" :href="project.githubLink" target="_blank">前往 Github</n-button>
          <n-button secondary type="success" v-if="project.webLink != null" tag="a" :href="project.webLink" target="_blank">打开看看</n-button>
        </n-space>
      </template>
    </n-card>
  </div>
</template>
