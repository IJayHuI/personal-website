<script setup>
  import { theme } from '@/main'
  import BeiAn from '@/components/BeiAn.vue'
  import Menu from '@/components/Navigate/desktop/Menu.vue'
  import Content from '@/components/Navigate/Content.vue'
  import { getData, drawerData, datas, expandedNames, menuOptions, copyLink } from '@/services/Navigate'
  import { useMessage } from 'naive-ui'

  const message = useMessage()

  const handleCopyLink = () => {
    copyLink(message)
      .then((response) => {
        message.success(response)
      })
      .catch((error) => {
        message.error(error)
      })
  }
  getData()
</script>
<template>
  <n-config-provider :theme="theme">
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
    <n-drawer v-model:show="drawerData.active" width="30%" placement="right">
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
