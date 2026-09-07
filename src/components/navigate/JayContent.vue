<script setup lang="ts">
import { IosShareRound } from '@vicons/material'
import { renderIcon } from '../../utils'
import { useNavigateStore } from '../../stores'
import type { NavigateItem } from '../../types/navigate'

const navigate = useNavigateStore()

withDefaults(defineProps<{ gridCols?: string }>(), {
  gridCols: '250px'
})

const updateExpandedCategory = (key: number[]) => {
  navigate.setExpandedCategory(key)
}

const itemClick = (item: NavigateItem) => {
  const group = navigate.navigateContent.find((g) => g.id === item.groupId)
  if (group) navigate.setDrawerGroup(group)
  navigate.setDrawerItem(item)
  navigate.setContentDrawerStatus(true)
}
</script>

<template>
  <n-collapse
    :expanded-names="[...navigate.expandedCategory]"
    @update:expanded-names="updateExpandedCategory"
  >
    <n-collapse-item
      v-for="group in navigate.navigateContent"
      :title="group.name"
      :name="group.id"
    >
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(var(--item-size),1fr))] gap-2"
        :style="{ '--item-size': gridCols }"
      >
        <template v-for="item in group.groupItems" :key="item.id">
          <n-button
            v-if="item.visible && navigate.highlightItems.has(item.id)"
            class="min-h-13 !pr-8 !text-wrap"
            secondary
            @click="itemClick(item)"
          >
            {{ item.name }}
            <n-button
              @click.stop
              class="!absolute right-2"
              :render-icon="renderIcon(IosShareRound)"
              text
              tag="a"
              :href="item.link"
              target="_blank"
            />
          </n-button>
        </template>
      </div>
    </n-collapse-item>
  </n-collapse>
</template>
