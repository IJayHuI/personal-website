<script setup>
  import JayFooter from '@/components/JayFooter.vue'
  import JayContent from '@/components/Navigate/JayContent.vue'
  import JayDrawerContent from '@/components/Navigate/JayDrawerContent.vue'
  import { getData, drawer, expandedNames, menu } from '@/services/Navigate'

  const handleUpdateExpandedNames = (keys) => {
    expandedNames.value = [keys]
  }
  getData()
</script>
<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider collapse-mode="width" :collapsed-width="60" :width="200" show-trigger="bar">
      <n-menu :options="menu.menuOptions" :collapsed-width="60" @update:value="handleUpdateExpandedNames" />
    </n-layout-sider>
    <n-layout-content content-class="pr-4 pl-6 pt-4 pb-4">
      <jay-content />
      <n-layout-footer class="flex gap-2">
        <jay-footer />
      </n-layout-footer>
    </n-layout-content>
    <n-drawer v-model:show="drawer.status" width="30%" placement="right">
      <jay-drawer-content />
    </n-drawer>
  </n-layout>
</template>
