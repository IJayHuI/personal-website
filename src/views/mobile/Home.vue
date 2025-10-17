<script setup>
  import { NLayout, NLayoutContent, NLayoutFooter, NGrid, NGi } from 'naive-ui'
  import JayAvatar from '@/components/Home/JayAvatar.vue'
  import JayDatetime from '@/components/Home/JayDatetime.vue'
  import Item from '@/components/Home/mobile/Item.vue'
  import ContactMe from '@/components/Home/mobile/ContactMe.vue'
  import ThemeChange from '@/components/Home/mobile/ThemeChange.vue'
  // import BackgroundChange from '@/components/Home/mobile/BackgroundChange.vue'
  import JayFooter from '@/components/JayFooter.vue'
  import { lightThemeOverrides, darkThemeOverrides, theme } from '@/services/Home'
</script>
<template>
  <n-config-provider :theme-overrides="theme.current === null ? lightThemeOverrides.mobile : darkThemeOverrides.mobile">
    <n-layout position="absolute">
      <n-layout-content position="absolute">
        <n-grid y-gap="20" :cols="1" :collapsed-rows="2" style="height: 100%" responsive="screen">
          <n-gi>
            <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end">
              <jay-avatar />
            </div>
          </n-gi>
          <n-gi>
            <n-carousel :space-between="10" style="width: 90%; height: 325px; margin: auto" draggable>
              <div class="carousel-item">
                <jay-datetime />
                <div style="width: 100%; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; flex-direction: column">
                  <Item @item-click="handleItemClick" />
                </div>
                <ContactMe />
              </div>
              <div class="carousel-item">
                <ThemeChange />
                <!-- <BackgroundChange /> -->
              </div>
            </n-carousel>
          </n-gi>
        </n-grid>
      </n-layout-content>
      <n-layout-footer position="absolute">
        <div style="text-align: center; margin: 5px">
          <jay-footer />
        </div>
      </n-layout-footer>
    </n-layout>
    <n-drawer v-model:show="drawerData.active" height="80%" placement="bottom">
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
  .carousel-item {
    width: 100%;
    height: max-content;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
