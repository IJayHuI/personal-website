<script setup>
  import { theme } from '@/services/Home'
  import JayFooter from '@/components/JayFooter.vue'
  import JayContent from '@/components/Navigate/JayContent.vue'
  import JayDrawerContent from '@/components/Navigate/JayDrawerContent.vue'
  import { getData, drawer, lightThemeOverrides, darkThemeOverrides, expandedNames, menu } from '@/services/Navigate'
  import { renderIcon } from '@/services/General'
  import { MenuRound, HomeRound } from '@vicons/material'

  const handleUpdateExpandedNames = (keys) => {
    drawer.value.menuDrawerStatus = false
    expandedNames.value = [keys]
  }
  getData()
</script>
<template>
  <n-config-provider :theme-overrides="theme.current === null ? lightThemeOverrides.mobile : darkThemeOverrides.mobile">
    <n-layout position="absolute">
      <n-layout-content content-class="p-4">
        <jay-content :grid-cols="'grid-cols-2'" :jump-button-place="'bottom'" />
        <n-layout-footer class="flex justify-center gap-2">
          <jay-footer />
        </n-layout-footer>
        <div class="h-11"><!-- 填充底部按钮 --></div>
      </n-layout-content>
      <div class="absolute bottom-0 grid grid-cols-2 w-full">
        <router-link to="/">
          <n-button :bordered="false" class="!h-11 !w-full !rounded-none" :render-icon="renderIcon(HomeRound)">返回</n-button>
        </router-link>
        <n-button :bordered="false" class="!h-11 !rounded-none" @click="drawer.menuDrawerStatus = true" :render-icon="renderIcon(MenuRound)">菜单</n-button>
      </div>
    </n-layout>
    <n-drawer v-model:show="drawer.status" height="50%" placement="bottom">
      <jay-drawer-content />
    </n-drawer>
    <n-drawer v-model:show="drawer.menuDrawerStatus" height="50%" placement="bottom">
      <n-drawer-content closable title="菜单">
        <n-menu :options="menu.menuOptions.slice(1)" @update:value="handleUpdateExpandedNames" />
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>
