<script setup lang="ts">
  import { ElPopover } from 'element-plus'
  import loadingState from '../App.vue'
  import { demosData } from '../main'
  import Top from '../views/Top.vue'
</script>

<template>
  <Top />
  <div class="container">
    <div class="box beforeLoad" :class="{ load: loadingState }">
      <h1 class="title">Demos</h1>
      <div class="matrix">
        <a class="elementHover demo" v-for="demo in demosData" :href="demo.link" target="_blank">
          <div class="smallImg"><img class="imgAutoSuitability" :src="demo.img" alt="" /></div>
          <div class="introduction">
            <h2>{{ demo.title }}</h2>
            <p>{{ demo.introduction }}</p>
          </div>
          <div class="suitability">
            <p>兼容性</p>
            <el-popover width="auto" placement="top-start" trigger="hover" content="兼容电脑">
              <template #reference>
                <img src="../../public/demosIcon/desktop.svg" v-if="demo.desktopSuitability == true" alt="" />
              </template>
            </el-popover>
            <el-popover width="auto" placement="top-start" trigger="hover" content="兼容手机">
              <template #reference>
                <img src="../../public/demosIcon/phone.svg" v-if="demo.mobileSuitability == true" alt="" />
              </template>
            </el-popover>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .matrix {
    grid-template-columns: 1fr;
  }

  .demo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .smallImg {
    height: 100%;
    overflow: hidden;
    border-radius: var(--borderRadius);
  }

  .introduction {
    text-align: center;
  }

  .suitability {
    text-align: center;
  }

  /* 移动端视图 */
  @media screen and (max-width: 720px) {
    .demo {
      height: 330px;
      flex-direction: column;
    }

    .introduction {
      margin: 15px 0;
    }

    .smallImg {
      width: 100%;
    }
  }

  /* 桌面端视图 */
  @media screen and (min-width: 720px) {
    .demo {
      height: 200px;
      flex-direction: row;
    }

    .smallImg {
      width: 20%;
    }

    .suitability * {
      margin: 0 10px;
    }
  }
</style>
