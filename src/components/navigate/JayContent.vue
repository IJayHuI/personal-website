<script setup lang="ts">
  import { IosShareRound } from '@vicons/material'

  import { renderIcon } from '../../lib/navigate'

  import type { NavigateGroup, NavigateItem } from '../../stores'

  const props = withDefaults(
    defineProps<{
      gridCols?: string
      datas: NavigateGroup[]
      highlightItems: Set<number>
      expandedCategory: Set<number>
      updateExpandedCategory: (key: number[]) => void
      itemClick: (item: NavigateItem) => void
    }>(),
    {
      gridCols: '250px',
      datas: () => [],
      highlightItems: () => new Set<number>(),
      expandedCategory: () => new Set<number>(),
      updateExpandedCategory: () => {}
    }
  )
</script>

<template>
  <n-collapse class="mb-4" :expanded-names="[...props.expandedCategory]" @update:expanded-names="updateExpandedCategory">
    <n-collapse-item v-for="group in datas" :title="group.name" :name="group.id">
      <div class="grid grid-cols-[repeat(auto-fill,minmax(var(--item-size),1fr))] gap-2" :style="{ '--item-size': props.gridCols }">
        <template v-for="item in group.groupItems">
          <n-button v-if="item.visible && props.highlightItems.has(item.id)" class="min-h-13 !pr-8 !text-wrap" secondary @click="itemClick(item)">
            {{ item.name }}
            <n-button @click.stop class="!absolute right-2" :render-icon="renderIcon(IosShareRound)" text tag="a" :href="item.link" target="_blank" />
          </n-button>
        </template>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>
