<script setup>
  import { theme } from '@/main'
  import { getData, loadingStatus, datas, menuOptions, lightThemeOverrides, darkThemeOverrides, drawerStatus } from '../../services/Project'
  import BeiAn from '@/components/BeiAn.vue'
  import Content from '@/components/Project/Content.vue'

  getData()
</script>
<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides.mobile : darkThemeOverrides.mobile">
    <n-layout position="absolute">
      <n-spin :show="loadingStatus" :size="70" style="height: 100%; width: 100%; --n-opacity-spinning: 0">
        <n-layout-content content-style="padding: 24px">
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px">
            <Content :data="datas" />
          </div>
          <n-layout-footer style="border-radius: 3px; margin-top: 24px">
            <div style="padding: 10px 0px 10px 3px; text-align: center">
              <BeiAn />
            </div>
          </n-layout-footer>
          <div style="height: 55px"></div>
          <!-- 填充 -->
        </n-layout-content>
      </n-spin>
    </n-layout>
    <n-button class="menu-button" @click="drawerStatus = true">菜单</n-button>
    <n-drawer v-model:show="drawerStatus" placement="bottom">
      <n-drawer-content closable title="菜单">
        <n-menu
          @update:value="
            () => {
              drawerStatus = false
            }
          "
          :options="menuOptions" />
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>
