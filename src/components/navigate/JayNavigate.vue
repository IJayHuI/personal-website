<script setup lang="ts">
  import { HomeRound, MenuRound } from '@vicons/material'

  import navigateTheme from '../../theme/navigate.json'

  import { renderIcon } from '../../lib/navigate'

  import JayFooter from '../../containers/JayFooter.vue'
  import JayMenu from '../../containers/navigate/JayMenu.vue'
  import JayContent from '../../containers/navigate/JayContent.vue'
  import JayDrawer from '../../containers/navigate/JayDrawer.vue'

  const props = withDefaults(
    defineProps<{
      isDark?: boolean
      isMobile?: boolean
      openMenuDrawer: () => void
    }>(),
    {
      isDark: false,
      isMobile: false,
      openMenuDrawer: () => {}
    }
  )
</script>
<template>
  <n-config-provider v-if="!props.isMobile">
    <n-layout position="absolute" has-sider>
      <n-layout-sider collapse-mode="width" :collapsed-width="64" :width="192" show-trigger="bar"><jay-menu /></n-layout-sider>
      <n-layout class="pl-6" content-class="py-4 pr-4">
        <n-layout-content><jay-content /></n-layout-content>
        <n-layout-footer><jay-footer /></n-layout-footer>
      </n-layout>
    </n-layout>
    <jay-drawer />
  </n-config-provider>
  <n-config-provider v-else :theme-overrides="props.isDark ? navigateTheme.dark.mobile : navigateTheme.light.mobile">
    <n-layout position="absolute">
      <n-layout content-class="p-2 py-4">
        <n-layout-content><jay-content grid-cols="150px" /></n-layout-content>
        <n-layout-footer class="flex gap-1 justify-center"><jay-footer /></n-layout-footer>
      </n-layout>
      <n-layout-footer class="w-full grid grid-cols-2 sticky bottom-0">
        <router-link to="/">
          <n-button size="large" :bordered="false" class="!w-full !rounded-none" :render-icon="renderIcon(HomeRound)">返回</n-button>
        </router-link>
        <n-button size="large" :bordered="false" class="!w-full !rounded-none" @click="openMenuDrawer()" :render-icon="renderIcon(MenuRound)">菜单</n-button>
      </n-layout-footer>
    </n-layout>
    <jay-drawer placement="bottom" size="50%" />
    <jay-menu />
  </n-config-provider>
</template>
