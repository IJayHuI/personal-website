<script setup>
  import { theme } from '@/services/Home'
  import { renderIcon } from '@/services/General'
  import { getData, themeOverrides } from '../../services/Project'
  import JayFooter from '@/components/JayFooter.vue'
  import JayContent from '@/components/Project/JayContent.vue'
  import { HomeRound } from '@vicons/material'

  getData()
</script>
<template>
  <n-config-provider :theme-overrides="theme.current === null ? themeOverrides.light.mobile : themeOverrides.dark.mobile">
    <n-layout position="absolute">
      <n-layout-content content-class="p-4">
        <jay-content />
        <n-layout-footer class="flex justify-center gap-2">
          <jay-footer />
        </n-layout-footer>
        <div class="h-11"><!-- 填充底部按钮 --></div>
      </n-layout-content>
      <router-link to="/" class="absolute bottom-0 w-full">
        <n-button :bordered="false" class="!h-11 !w-full !rounded-none" :render-icon="renderIcon(HomeRound)">返回</n-button>
      </router-link>
    </n-layout>
  </n-config-provider>
</template>
