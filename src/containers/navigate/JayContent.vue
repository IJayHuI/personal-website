<script setup lang="ts">
  import JayContent from '../../components/navigate/JayContent.vue'

  import { useStores, type NavigateItem, type NavigateGroup } from '../../stores'

  const { navigate } = useStores()

  const updateExpandedCategory = (key: number[]) => {
    navigate.setExpandedCategory(key)
  }
  const itemClick = (item: NavigateItem) => {
    const group = navigate.navigateContent.find((group: NavigateGroup) => group.id === item.groupId)
    if (group) navigate.setDrawerGroup(group)
    navigate.setDrawerItem(item)
    navigate.setContentDrawerStatus(true)
  }

  const props = withDefaults(
    defineProps<{
      gridCols?: string
    }>(),
    {
      gridCols: '250px'
    }
  )
</script>
<template>
  <jay-content :grid-cols="props.gridCols" :datas="navigate.navigateContent" :expanded-category="navigate.expandedCategory" :highlight-items="navigate.highlightItems" :update-expanded-category="updateExpandedCategory" :item-click="itemClick" />
</template>
