<script setup>
  import { IosShareRound } from '@vicons/material'
  import { NIcon, NSpace } from 'naive-ui'
  import { ref, h } from 'vue'

  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    expandedNames: {
      type: Array,
      default: () => []
    }
  })
  const drawerData = ref({
    active: false,
    title: '',
    content: '',
    link: ''
  })

  const emit = defineEmits(['update:expandedNames'])

  const renderIcon = () => {
    return h(NIcon, null, {
      default: () => h(IosShareRound)
    })
  }

  const handleUpdateExpandedNames = (names) => {
    emit('update:expandedNames', names)
  }

  const toDrawer = (link) => {
    console.log(link)
    drawerData.value = {
      active: true,
      title: link.name,
      content: link.introduction,
      link: link.link
    }
  }
</script>

<template>
  <n-collapse style="margin: 16px 0px" :expanded-names="expandedNames" @update:expanded-names="handleUpdateExpandedNames">
    <n-collapse-item v-for="item in data" :title="item.name" :name="item.documentId">
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 10px; margin-right: 24px">
        <template v-for="link in item.item">
          <n-button style="min-height: 50px; text-wrap: wrap; padding: 0 38px" tertiary size="large" @click="toDrawer(link)">
            {{ link.name }}
            <n-button @click.stop style="position: absolute; right: 10px" :render-icon="renderIcon" text tag="a" :href="link.link" target="_blank"></n-button>
          </n-button>
        </template>
      </div>
    </n-collapse-item>
  </n-collapse>
  <n-drawer v-model:show="drawerData.active" width="30%" placement="right">
    <n-drawer-content :title="drawerData.title">
      {{ drawerData.content }}
      <template #footer>
        <n-space>
          <n-button>关闭</n-button>
          <n-button tag="a" :href="drawerData.link" target="_blank" strong type="success">前往</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
