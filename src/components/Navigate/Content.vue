<script setup>
  import { IosShareRound } from '@vicons/material'
  import { renderIcon } from '@/services/General'
  import { expandedNames, drawerData, datas } from '@/services/Navigate'

  const handleUpdateExpandedNames = (names) => {
    expandedNames.value = names
  }
  const handleUpdateDrawerData = (data, item) => {
    drawerData.value = { active: true, title: data.name, content: data.introduction, link: data.link, needProxy: data.needProxy, category: item.name }
  }
</script>

<template>
  <n-collapse style="margin: 16px 0px" :expanded-names="expandedNames" @update:expanded-names="handleUpdateExpandedNames">
    <n-collapse-item v-for="item in datas" :title="item.name" :name="item.id">
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 10px">
        <template v-for="link in item.navigate_items">
          <n-button v-if="link.visible" style="min-height: 50px; text-wrap: wrap; padding: 0 38px" tertiary size="large" @click="handleUpdateDrawerData(link, item)">
            {{ link.name }}
            <n-button @click.stop style="position: absolute; right: 10px" :render-icon="renderIcon(IosShareRound)" text tag="a" :href="link.link" target="_blank"></n-button>
          </n-button>
        </template>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>
