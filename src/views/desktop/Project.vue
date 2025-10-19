<script setup>
  import { getData, menuOptions } from '@/services/Project'
  import JayFooter from '@/components/JayFooter.vue'
  import Content from '@/components/Project/Content.vue'
  getData()
</script>
<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider collapse-mode="width" :collapsed-width="60" :width="150" show-trigger="bar">
      <n-menu :options="menuOptions" :collapsed-width="60" />
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px 24px">
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px">
        <Content />
      </div>
      <n-layout-footer style="border-radius: 3px; margin-top: 24px">
        <div style="padding: 10px 0px 10px 3px">
          <jay-footer />
        </div>
      </n-layout-footer>
    </n-layout-content>
  </n-layout>
</template>
