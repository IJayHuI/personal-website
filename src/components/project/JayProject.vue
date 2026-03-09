<script setup lang="ts">
  import { HomeRound } from '@vicons/material'

  import projectTheme from '../../theme/project.json'

  import { renderIcon } from '../../lib/navigate'

  import JayFooter from '../../containers/JayFooter.vue'
  import JayContent from '../../containers/project/JayContent.vue'
  import JayMenu from '../../containers/project/JayMenu.vue'

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
    <n-layout position="absolute" has-sider>
      <n-layout-sider collapse-mode="width" :collapsed-width="64" :width="192" show-trigger="bar" :default-collapsed="true"><jay-menu /></n-layout-sider>
      <n-layout class="pl-6" content-class="py-4 pr-4">
        <n-layout-content><jay-content /></n-layout-content>
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
