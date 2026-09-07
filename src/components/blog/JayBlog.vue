<script setup lang="ts">
/**
 * 博客页主容器（空壳）
 * 布局同 project 页，文章列表待后续实现
 */
import { HomeRound } from '@vicons/material'
import blogTheme from '../../theme/blog.json'
import { renderIcon } from '../../utils'
import { useGeneralStore } from '../../stores'
import JayFooter from '../common/JayFooter.vue'
import JayArticleList from './JayArticleList.vue'

const general = useGeneralStore()

const appVersion = __APP_VERSION__
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
        <p class="text-2xl font-bold">Blog 博客页</p>
        <div class="w-64"></div>
      </n-layout-header>
      <n-layout position="absolute" class="!top-16" content-class="p-4">
        <n-layout><jay-article-list /></n-layout>
        <n-layout-footer><jay-footer :app-version="appVersion" /></n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
  <n-config-provider
    v-else
    :theme-overrides="general.isDark ? blogTheme.dark.mobile : blogTheme.light.mobile"
  >
    <n-layout position="absolute">
      <n-layout-header class="h-16 p-2 flex flex-row justify-between items-center sticky top-0">
        <n-avatar size="large" src="/avatar.jpg" />
        <p class="text-2xl font-bold">Blog 博客页</p>
      </n-layout-header>
      <n-layout-content class="p-4"><jay-article-list /></n-layout-content>
      <n-layout-footer class="flex gap-1 justify-center mb-4"
        ><jay-footer :app-version="appVersion"
      /></n-layout-footer>
      <n-layout-footer class="w-full sticky bottom-0">
        <router-link to="/">
          <n-button
            size="large"
            :bordered="false"
            class="!w-full !h-16 !rounded-none"
            :render-icon="renderIcon(HomeRound)"
            >返回</n-button
          >
        </router-link>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
