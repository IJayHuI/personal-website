<script setup lang="ts">
  import type { MenuOption } from 'naive-ui'

  const props = withDefaults(
    defineProps<{
      isMobile: boolean
      status: boolean
      options: MenuOption[]
      closeDrawer: () => void
      updateExpandedCategory: (key: number | string) => void
    }>(),
    {
      isMobile: false,
      status: false,
      options: () => [],
      closeDrawer: () => {},
      updateExpandedCategory: () => {}
    }
  )
</script>
<template>
  <n-menu v-if="!props.isMobile" :options="props.options" :collapsed-width="64" @update:value="updateExpandedCategory" />
  <n-drawer v-else :show="props.status" height="50%" placement="bottom" @update:show="closeDrawer">
    <n-drawer-content title="菜单">
      <n-menu :options="props.options" @update:value="updateExpandedCategory" />
      <template #footer>
        <n-space>
          <n-button type="error" secondary @click="closeDrawer()">关闭</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
