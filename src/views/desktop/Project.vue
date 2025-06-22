<script setup>
  import { theme } from '@/main'
  import { getData, datas, menuOptions } from '@/services/Project'
  import BeiAn from '@/components/BeiAn.vue'
  import Content from '@/components/Project/Content.vue'

  getData()
</script>
<template>
  <n-config-provider :theme="theme">
      <n-layout has-sider position="absolute">
        <n-layout-sider collapse-mode="width" :collapsed-width="60" :width="150" show-trigger="bar">
          <n-menu :options="menuOptions" :collapsed-width="60" />
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px 24px">
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px">
            <Content :data="datas" />
          </div>
          <n-layout-footer style="border-radius: 3px; margin-top: 24px">
            <div style="padding: 10px 0px 10px 3px">
              <BeiAn />
            </div>
          </n-layout-footer>
        </n-layout-content>
      </n-layout>
  </n-config-provider>
</template>
