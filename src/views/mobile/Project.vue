<script setup>
  import { theme } from '@/services/Home'
  import { getData, menuOptions, themeOverrides, drawerStatus } from '../../services/Project'
  import JayFooter from '@/components/JayFooter.vue'
  import Content from '@/components/Project/Content.vue'

  getData()
</script>
<template>
  <n-config-provider :theme-overrides="theme.current === null ? themeOverrides.light.mobile : themeOverrides.dark.mobile">
    <n-layout position="absolute">
      <n-layout-content content-style="padding: 24px">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px">
          <Content />
        </div>
        <n-layout-footer style="border-radius: 3px; margin-top: 24px">
          <div style="padding: 10px 0px 10px 3px; text-align: center">
            <jay-footer />
          </div>
        </n-layout-footer>
        <div style="height: 55px"></div>
        <!-- 填充 -->
      </n-layout-content>
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
