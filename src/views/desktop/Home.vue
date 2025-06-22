<script setup>
  import { NGrid, NGi } from 'naive-ui'
  import BeiAn from '@/components/BeiAn.vue'
  import Avatar from '@/components/Home/Avatar.vue'
  import ContactMe from '@/components/Home/desktop/ContactMe.vue'
  import DateTime from '@/components/Home/DateTime.vue'
  import Item from '@/components/Home/desktop/Item.vue'
  import ThemeChange from '@/components/Home/ThemeChange.vue'
  import BackgroundChange from '@/components/Home/BackgroundChange.vue'
  import { theme } from '@/main'
  import { handleItemClick, darkThemeOverrides, lightThemeOverrides, drawerData } from '@/services/Home'
</script>
<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides.desktop : darkThemeOverrides.desktop">
    <n-layout position="absolute">
      <n-layout-content position="absolute">
        <n-grid x-gap="20" :cols="2" style="height: 100%">
          <n-gi>
            <div style="display: flex; justify-content: end; align-items: center; height: 100%">
              <div class="container">
                <Avatar />
                <ContactMe />
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="container">
              <DateTime />
              <div style="width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; flex-direction: column">
                <Item @item-click="handleItemClick" />
              </div>
              <ThemeChange />
              <BackgroundChange />
            </div>
          </n-gi>
        </n-grid>
      </n-layout-content>
      <n-layout-footer position="absolute">
        <div style="text-align: center; margin: 10px">
          <BeiAn />
        </div>
      </n-layout-footer>
    </n-layout>
    <n-drawer v-model:show="drawerData.active" width="35%" placement="right">
      <n-drawer-content :title="drawerData.title">
        <component :is="drawerData.component" />
        <template #footer>
          <n-button @click="drawerData.active = false">关闭</n-button>
        </template>
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>

<style scoped>
  .container {
    max-width: 500px;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
