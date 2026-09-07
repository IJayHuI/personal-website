<script setup lang="ts">
import { computed } from 'vue'
import type { MenuOption } from 'naive-ui'
import { CloseFullscreenRound, FormatListBulletedRound } from '@vicons/material'
import { renderIcon } from '../../utils'
import { useGeneralStore, useNavigateStore } from '../../stores'

const general = useGeneralStore()
const navigate = useNavigateStore()

// 默认菜单项（关闭/展开所有）放在组件层，不进 store
const defaultMenuOptions = [
  {
    label: '关闭所有',
    key: 'closeAll',
    icon: renderIcon(CloseFullscreenRound)
  },
  {
    label: '展开所有',
    key: 'expandedAll',
    icon: renderIcon(FormatListBulletedRound)
  }
] as MenuOption[]

const menuOptions = computed<MenuOption[]>(() =>
  defaultMenuOptions.concat(navigate.menuOptions as MenuOption[])
)

// 点击菜单项：展开所有 / 关闭所有 / 切换单个分组
const updateExpandedCategory = (key: number | string) => {
  if (key === 'expandedAll')
    navigate.setExpandedGroupIds(navigate.groups.map((group) => group.id))
  else if (key === 'closeAll') navigate.setExpandedGroupIds([])
  else navigate.setExpandedGroupIds([key as number])
}

const closeDrawer = () => {
  navigate.setMenuDrawerOpen(false)
}
</script>

<template>
  <n-menu
    v-if="!general.isMobile"
    :options="menuOptions"
    :collapsed-width="64"
    @update:value="updateExpandedCategory"
  />
  <n-drawer
    v-else
    :show="navigate.isMenuDrawerOpen"
    height="50%"
    placement="bottom"
    @update:show="closeDrawer"
  >
    <n-drawer-content title="菜单">
      <n-menu :options="menuOptions" @update:value="updateExpandedCategory" />
      <template #footer>
        <n-space>
          <n-button type="error" secondary @click="closeDrawer()">关闭</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
