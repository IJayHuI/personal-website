<script setup>
  import { ref } from 'vue'
  import { getData, menuOptions } from '@/services/Project'
  import JayFooter from '@/components/JayFooter.vue'
  import JayContent from '@/components/Project/JayContent.vue'

  const collapsedWidth = ref(60)
  getData()
</script>
<template>
  <n-layout has-sider>
    <n-layout-sider collapse-mode="width" :collapsed-width="collapsedWidth" :width="150" show-trigger="bar" :default-collapsed="true">
      <n-menu :options="menuOptions" :collapsed-width="collapsedWidth" />
    </n-layout-sider>
    <n-layout-content content-class="w-full pr-4 pl-6 pt-4 pb-4">
      <jay-content />
      <n-layout-footer class="flex gap-2">
        <jay-footer />
      </n-layout-footer>
    </n-layout-content>
  </n-layout>
</template>
