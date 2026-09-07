<script setup lang="ts">
import { IosShareRound } from '@vicons/material'
import { renderIcon } from '../../utils'
import { useNavigateStore } from '../../stores'
import type { NavigateItem } from '../../types/navigate'

const navigate = useNavigateStore()

withDefaults(defineProps<{ gridCols?: string }>(), {
  gridCols: '250px'
})

// 折叠面板展开/收起时同步到 store
const updateExpandedCategory = (key: number[]) => {
  navigate.setExpandedGroupIds(key)
}

// 点击站点：记录所属分组和当前站点，打开详情抽屉
const itemClick = (item: NavigateItem) => {
  const group = navigate.groups.find((g) => g.id === item.groupId)
  if (group) navigate.setActiveDrawerGroup(group)
  navigate.setActiveDrawerItem(item)
  navigate.setContentDrawerOpen(true)
}
</script>

<template>
  <n-collapse
    :expanded-names="[...navigate.expandedGroupIds]"
    @update:expanded-names="updateExpandedCategory"
  >
    <n-collapse-item
      v-for="group in navigate.groups"
      :title="group.name"
      :name="group.id"
    >
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(var(--item-size),1fr))] gap-2"
        :style="{ '--item-size': gridCols }"
      >
        <template v-for="item in group.groupItems" :key="item.id">
          <n-button
            v-if="item.visible && navigate.highlightedItemIds.has(item.id)"
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
