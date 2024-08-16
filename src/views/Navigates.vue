<template>
  <Top />
  <div class="container">
    <div class="box beforeLoad" :class="{ load: loadingState }">
      <h1 class="title">Navigate</h1>
      <div class="matrix" v-for="navigate in navigateData">
        <h2 class="stickyHeader" style="color: var(--fontColor)">{{ navigate.groupName }}</h2>
        <a @touchstart="" class="elementHover" v-for="link in navigate.navigate.split(';')" :href="link.split(',')[1]" target="_blank">
          <p>{{ link.split(',')[0] }}</p>
          <el-popover width="auto" placement="top-start" trigger="hover" content="You need some magic to visit this web!">
            <template #reference>
              <p style="margin-left: 10px" v-if="link.split(',')[2] == true">⚠️</p>
            </template>
          </el-popover>
        </a>
      </div>
      <h2 style="color: var(--fontColor)">提示</h2>
      <h3>本页内容会有增加删减，移动分类，随缘更新</h3>
      <h3>^_^点击跳转按钮即可^_^</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { navigateData } from '../main'
  import loadingState from '../App.vue'
  import { ElPopover } from 'element-plus'
  import Top from '../views/Top.vue'
</script>

<style scoped>
  .matrix > :first-child {
    grid-column: 1 / -1; /* 让第一个元素占满一整行 */
  }

  .stickyHeader {
    width: max-content;
    position: sticky;
    top: 65px;
    z-index: 9;
    padding: 15px;
    background-color: var(--backColor);
    backdrop-filter: var(--backBlur);
    -webkit-backdrop-filter: var(--backBlur);
    border-radius: var(--borderRadius);
  }

  .elementHover {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-select: none;
  }

  h3 {
    color: var(--fontColor);
    font-weight: normal;
  }
</style>
