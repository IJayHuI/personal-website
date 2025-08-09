<script setup>
  import { IosShareRound } from '@vicons/material'
  import { renderIcon } from '@/services/General'

  const props = defineProps({
    data: {
      type: Object,
      required: true
    },
    expandedNames: {
      type: Array,
      default: () => []
    },
    drawerData: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(['update:expandedNames', 'update:drawerData'])

  const handleUpdateExpandedNames = (names) => {
    emit('update:expandedNames', names)
  }

  const handleUpdateDrawerData = (data) => {
    emit('update:drawerData', { active: true, title: data.name, content: data.introduction, link: data.link })
  }
</script>

<template>
  <n-collapse style="margin: 16px 0px" :expanded-names="expandedNames" @update:expanded-names="handleUpdateExpandedNames">
    <n-collapse-item v-for="item in data" :title="item.name" :name="item.documentId">
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 10px">
        <template v-for="link in item.item">
          <n-button style="min-height: 50px; text-wrap: wrap; padding: 0 38px" tertiary size="large" @click="handleUpdateDrawerData(link)">
            {{ link.name }}
            <n-button @click.stop style="position: absolute; right: 10px" :render-icon="renderIcon(IosShareRound)" text tag="a" :href="link.link" target="_blank"></n-button>
          </n-button>
        </template>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>
