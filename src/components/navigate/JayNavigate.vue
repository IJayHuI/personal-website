<script setup lang="ts">
import { onMounted } from 'vue'
import { HomeRound, MenuRound, SearchRound } from '@vicons/material'
import navigateTheme from '../../theme/navigate.json'
import { renderIcon, search } from '../../utils'
import { useGeneralStore, useNavigateStore } from '../../stores'
import JayFooter from '../common/JayFooter.vue'
import JayMenu from './JayMenu.vue'
import JayContent from './JayContent.vue'
import JayDrawer from './JayDrawer.vue'

const general = useGeneralStore()
const navigate = useNavigateStore()

const appVersion: string = __APP_VERSION__

// 搜索：更新关键词，计算匹配的分组和站点并高亮
const updateValue = (v: string) => {
  navigate.setSearchKeyword(v)
  const result = search(navigate.groups, v)
  navigate.setExpandedGroupIds(result.groupIds)
  navigate.setHighlightedItemIds(result.items)
}

// 打开移动端菜单抽屉
const openMenuDrawer = () => {
  navigate.setMenuDrawerOpen(true)
}

onMounted(() => {
  navigate.fetchNavigateDatas()
})
</script>

<template>
  <n-config-provider v-if="!general.isMobile">
    <n-layout position="absolute">
      <n-layout-header class="w-full h-16 p-2 flex flex-row justify-between items-center">
        <div class="w-64 flex gap-2 items-center">
          <n-avatar size="large" src="/avatar.jpg" />
          <router-link to="/">
            <n-button size="large" secondary :render-icon="renderIcon(HomeRound)">返回主页</n-button>
          </router-link>
        </div>
        <p class="text-2xl font-bold">Navigate 导航页</p>
        <n-input
          size="large"
          class="!max-w-64"
          @update:value="updateValue"
          :value="navigate.searchKeyword"
          type="text"
          placeholder="搜索"
          clearable
        >
          <template #prefix>
            <n-icon :component="SearchRound" />
          </template>
        </n-input>
      </n-layout-header>
      <n-layout has-sider position="absolute" class="!top-16">
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="64"
          :width="192"
          show-trigger="bar"
          :default-collapsed="true"
          ><jay-menu
        /></n-layout-sider>
        <n-layout class="pl-6" content-class="pt-4 pr-2 pb-2">
          <n-layout><jay-content /></n-layout>
          <n-layout-footer><jay-footer :app-version="appVersion" /></n-layout-footer>
        </n-layout>
      </n-layout>
    </n-layout>
    <jay-drawer />
  </n-config-provider>
  <n-config-provider
    v-else
    :theme-overrides="general.isDark ? navigateTheme.dark.mobile : navigateTheme.light.mobile"
  >
    <n-layout position="absolute">
      <n-layout-header class="h-16 p-2 flex flex-row justify-between items-center sticky top-0">
        <n-avatar size="large" src="/avatar.jpg" />
        <p class="text-2xl font-bold">Navigate 导航页</p>
      </n-layout-header>
      <n-layout-content class="p-2">
        <jay-content grid-cols="150px" />
        <n-layout-footer class="mt-2 flex gap-1 justify-center"
          ><jay-footer :app-version="appVersion"
        /></n-layout-footer>
      </n-layout-content>
      <n-layout-footer class="sticky bottom-0 flex flex-col gap-2">
        <div class="px-2">
          <n-input
            size="large"
            @update:value="updateValue"
            :value="navigate.searchKeyword"
            type="text"
            placeholder="搜索"
            clearable
          >
            <template #prefix>
              <n-icon :component="SearchRound" />
            </template>
          </n-input>
        </div>
        <div class="w-full grid grid-cols-2">
          <router-link to="/">
            <n-button
              size="large"
              :bordered="false"
              class="!w-full !h-16 !rounded-none"
              :render-icon="renderIcon(HomeRound)"
              >返回</n-button
            >
          </router-link>
          <n-button
            size="large"
            :bordered="false"
            class="!w-full !h-16 !rounded-none"
            @click="openMenuDrawer()"
            :render-icon="renderIcon(MenuRound)"
            >菜单</n-button
          >
        </div>
      </n-layout-footer>
    </n-layout>
    <jay-drawer placement="bottom" size="50%" />
    <jay-menu />
  </n-config-provider>
</template>
