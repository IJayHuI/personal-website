<script setup>
  import { theme } from '@/services/Home'
  import JayFooter from '@/components/JayFooter.vue'
  import Content from '@/components/Navigate/Content.vue'
  import { getData, drawerData, drawerStatus, lightThemeOverrides, darkThemeOverrides, expandedNames, menu } from '../../services/Navigate'

  const handleUpdateExpandedNames = (keys) => {
    drawerStatus.value = false
    expandedNames.value = [keys]
  }
  getData()
</script>
<template>
  <n-config-provider :theme-overrides="theme.current === null ? lightThemeOverrides.mobile : darkThemeOverrides.mobile">
    <n-layout position="absolute">
      <n-layout-content content-style="padding: 0px 24px;">
        <Content />
        <n-layout-footer style="border-radius: 3px; margin: 0px 0px 16px 0px">
          <div style="padding: 10px 0px 10px 3px; text-align: center">
            <jay-footer />
          </div>
        </n-layout-footer>
        <div style="height: 55px"></div>
        <!-- 填充 -->
      </n-layout-content>
    </n-layout>
    <n-button class="menu-button" @click="drawerStatus = true">菜单</n-button>

    <n-drawer v-model:show="drawerData.active" height="50%" placement="bottom">
      <n-drawer-content :title="drawerData.title">
        <div class="drawer-content">
          <div>
            <h3>是否需要代理：</h3>
            {{ drawerData.needProxy ? '是' : '否' }}
          </div>
          <div>
            <h3>类别：</h3>
            {{ drawerData.category == null ? '暂无类别' : drawerData.category }}
          </div>
          <div class="drawer-content-item-2fr">
            <h3>链接：</h3>
            {{ drawerData.link == null ? '暂无链接' : drawerData.link }}
          </div>
          <div class="drawer-content-item-2fr">
            <h3>简介：</h3>
            {{ drawerData.content == null ? '暂无简介' : drawerData.content }}
          </div>
        </div>
        <template #footer>
          <n-space>
            <n-button @click="drawerData.active = false">关闭</n-button>
            <n-button @click="handleCopyLink()">复制链接</n-button>
            <n-button tag="a" :href="drawerData.link" target="_blank" strong type="success">前往</n-button>
          </n-space>
        </template>
      </n-drawer-content>
    </n-drawer>
    <n-drawer v-model:show="drawerStatus" height="50%" placement="bottom">
      <n-drawer-content closable title="菜单">
        <n-menu :options="menu.menuOptions" @update:value="handleUpdateExpandedNames"></n-menu>
      </n-drawer-content>
    </n-drawer>
  </n-config-provider>
</template>
<style scoped>
  .drawer-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .drawer-content-item-2fr {
    grid-column: span 2;
  }
</style>
