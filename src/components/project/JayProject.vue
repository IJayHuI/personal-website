<script setup lang="ts">
  import { HomeRound } from '@vicons/material'
  import { NAvatar } from 'naive-ui'

  import projectTheme from '../../theme/project.json'

  import { renderIcon } from '../../lib/navigate'

  import JayFooter from '../../containers/JayFooter.vue'
  import JayContent from '../../containers/project/JayContent.vue'

  const props = withDefaults(
    defineProps<{
      isDark?: boolean
      isMobile?: boolean
    }>(),
    {
      isDark: false,
      isMobile: false
    }
  )
</script>
<template>
  <n-config-provider v-if="!props.isMobile">
    <n-layout position="absolute">
      <n-layout-header class="w-full h-16 p-2 flex flex-row justify-between items-center">
        <div class="w-64 flex gap-2 items-center">
          <n-avatar size="large" src="/avatar.jpg" />
          <router-link to="/">
            <n-button size="large" secondary :render-icon="renderIcon(HomeRound)">返回主页</n-button>
          </router-link>
        </div>
        <p class="text-2xl font-bold">Project 项目页</p>
        <div class="w-64"></div>
      </n-layout-header>
      <n-layout position="absolute" class="!top-16" content-class="p-4">
        <n-layout><jay-content /></n-layout>
        <n-layout-footer><jay-footer /></n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
  <n-config-provider v-else :theme-overrides="props.isDark ? projectTheme.dark.mobile : projectTheme.light.mobile">
    <n-layout position="absolute">
      <n-layout content-class="p-2 py-4">
        <n-layout-content><jay-content /></n-layout-content>
        <n-layout-footer class="flex gap-1 justify-center"><jay-footer /></n-layout-footer>
      </n-layout>
      <n-layout-footer class="w-full sticky bottom-0">
        <router-link to="/">
          <n-button size="large" :bordered="false" class="!w-full !rounded-none" :render-icon="renderIcon(HomeRound)">返回</n-button>
        </router-link>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
