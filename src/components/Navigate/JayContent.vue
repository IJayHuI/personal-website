<script setup>
  import { IosShareRound } from '@vicons/material'
  import { renderIcon } from '@/services/General'
  import { expandedNames, drawer, datas } from '@/services/Navigate'

  const handleUpdateExpandedNames = (names) => {
    expandedNames.value = names
  }
  const handleUpdateDrawerData = (data, item) => {
    drawer.value.status = true
    drawer.value.datas = { title: data.name, content: data.introduction, link: data.link, needProxy: data.needProxy, category: item.name }
  }
  const props = defineProps({
    gridCols: { type: String, required: false, default: 'grid-cols-[repeat(auto-fill,minmax(250px,1fr))]' }
  })
</script>

<template>
  <n-collapse class="mb-4" :expanded-names="expandedNames" @update:expanded-names="handleUpdateExpandedNames">
    <n-collapse-item v-for="item in datas" :title="item.name" :name="item.id">
      <div :class="`grid ${props.gridCols} gap-2`">
        <template v-for="link in item.navigate_items">
          <n-button v-if="link.visible" class="min-h-13 !pr-8 !text-wrap" secondary @click="handleUpdateDrawerData(link, item)">
            {{ link.name }}
            <n-button @click.stop class="!absolute right-2" :render-icon="renderIcon(IosShareRound)" text tag="a" :href="link.link" target="_blank" />
          </n-button>
        </template>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>
