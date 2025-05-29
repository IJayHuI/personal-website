<script setup>
  import { theme } from '../../main'
  import { ref, h } from 'vue'
  import axios from 'axios'
  import { NIcon } from 'naive-ui'
  import BeiAn from '../../components/BeiAn.vue'
  import Menu from '../../components/Navigate/Menu.vue'
  import Content from '../../components/Navigate/Content.vue'
  import * as icons from '@vicons/material'

  const renderIcon = (icon) => {
    return () => h(NIcon, null, { default: () => h(icon) })
  }
  const datas = ref([])
  const menuOptions = ref([
    {
      label: '关闭所有',
      key: 'closeAll',
      icon: renderIcon(icons['CloseFullscreenRound'])
    },
    {
      label: '展开所有',
      icon: renderIcon(icons['FormatListBulletedRound']),
      key: 'expandedAll',
      onClick: () => {
        datas.value.map((item) => {
          expandedNames.value.push(item.documentId)
        })
      }
    }
  ])
  const expandedNames = ref([])
  const getData = () => {
    axios
      .get('/server/navigate-groups?populate=item')
      .then((response) => {
        datas.value = response.data.data
        datas.value.map((item) => {
          menuOptions.value.push({
            label: item.name,
            key: item.documentId,
            icon: renderIcon(icons[item.icon])
          })
          expandedNames.value.push(item.documentId)
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  getData()
</script>
<template>
  <n-config-provider :theme="theme">
    <n-layout position="absolute">
      <n-layout has-sider position="absolute">
        <n-layout-sider collapse-mode="width" :collapsed-width="60" :width="240" show-trigger="bar">
          <Menu :options="menuOptions" v-model:expandedNames="expandedNames" />
        </n-layout-sider>
        <n-layout-content content-style="padding: 0px 0px 0px 24px;">
          <Content :data="datas" v-model:expandedNames="expandedNames" />
          <n-layout-footer style="border-radius: 3px; margin: 0px 24px 16px 0px">
            <div style="padding: 10px 0px 10px 3px">
              <BeiAn />
            </div>
          </n-layout-footer>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
