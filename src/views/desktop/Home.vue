<script setup>
  import { NGrid, NGi } from 'naive-ui'
  import BeiAn from '../../components/BeiAn.vue'
  // import Avatar from '../../components/Home/Avatar.vue'
  import Item from '../../components/Home/Item.vue'
  import { theme } from '../../main'

  const lightThemeOverrides = {
    Card: {
      color: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '10px'
    },
    Layout: {
      color: 'rgba(0, 0, 0, 0)',
      footerColor: 'rgba(255, 255, 255, 0.4)',
      textColor: '#000'
    }
  }

  const darkThemeOverrides = {
    Card: {
      color: 'rgba(24, 24, 28, 0.5)',
      borderRadius: '10px'
    },
    Layout: {
      color: 'rgba(16, 16, 20, 0.4)',
      footerColor: 'rgba(24, 24, 28, 0.4)'
    }
  }
</script>
<template>
  <n-config-provider :theme="theme" :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides">
    <n-layout position="absolute">
      <n-layout-content position="absolute">
        <n-grid x-gap="10" :cols="1" style="height: 100%">
          <!-- <n-gi></n-gi> -->
          <n-gi>
            <div style="display: flex; justify-content: center; align-items: center; height: 100%">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px">
                <Item />
              </div>
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
  </n-config-provider>
</template>
