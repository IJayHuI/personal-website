<script setup>
  import { theme } from '../../main'
  import BeiAn from '../../components/BeiAn.vue'
  import Menu from '../../components/Navigate/desktop/Menu.vue'
  import Content from '../../components/Navigate/Content.vue'
  import { getData, drawerData, datas, expandedNames, menuOptions, loadingStatus } from '../../services/Navigate'

  getData()
</script>
<template>
  <n-config-provider :theme="theme">
    <n-spin :show="loadingStatus" :size="70" style="height: 100%; width: 100%; --n-opacity-spinning: 0">
      <n-layout has-sider position="absolute">
        <n-layout-sider collapse-mode="width" :collapsed-width="60" :width="240" show-trigger="bar">
          <Menu :options="menuOptions" v-model:expandedNames="expandedNames" />
        </n-layout-sider>
        <n-layout-content content-style="padding: 0px 24px;">
          <Content :data="datas" v-model:expandedNames="expandedNames" v-model:drawerData="drawerData" />
          <n-layout-footer style="border-radius: 3px; margin: 0px 0px 16px 0px">
            <div style="padding: 10px 0px 10px 3px">
              <BeiAn />
            </div>
          </n-layout-footer>
        </n-layout-content>
      </n-layout>
    </n-spin>
    <n-drawer v-model:show="drawerData.active" width="30%" placement="right">
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
  </n-config-provider>
</template>
