<script setup>
  import { theme } from '@/main'
  import BeiAn from '@/components/BeiAn.vue'
  import Menu from '@/components/Navigate/mobile/Menu.vue'
  import Content from '@/components/Navigate/Content.vue'
  import { getData, drawerData, datas, expandedNames, menuOptions, drawerStatus, lightThemeOverrides, darkThemeOverrides } from '../../services/Navigate'

  getData()
</script>
<template>
  <n-config-provider :theme-overrides="theme === null ? lightThemeOverrides.mobile : darkThemeOverrides.mobile">
    <n-layout position="absolute">
      <n-layout-content content-style="padding: 0px 24px;">
        <Content :data="datas" v-model:expandedNames="expandedNames" v-model:drawerData="drawerData" />
        <n-layout-footer style="border-radius: 3px; margin: 0px 0px 16px 0px">
          <div style="padding: 10px 0px 10px 3px; text-align: center">
            <BeiAn />
          </div>
        </n-layout-footer>
        <div style="height: 55px"></div>
        <!-- 填充 -->
      </n-layout-content>
    </n-layout>
    <n-button class="menu-button" @click="drawerStatus = true">菜单</n-button>

    <n-drawer v-model:show="drawerData.active" height="50%" placement="bottom">
      <n-drawer-content :title="drawerData.title">
        {{ drawerData.content == null ? '暂无简介' : drawerData.content }}
        <template #footer>
          <n-space>
            <n-button @click="drawerData.active = false">关闭</n-button>
            <n-button tag="a" :href="drawerData.link" target="_blank" strong type="success">前往</n-button>
          </n-space>
        </template>
      </n-drawer-content>
    </n-drawer>
    <n-drawer v-model:show="drawerStatus" height="50%" placement="bottom">
      <n-drawer-content closable title="菜单">
        <Menu :options="menuOptions" v-model:expandedNames="expandedNames" />
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>
