<script setup>
  import { ref } from 'vue'
  import { theme } from '../pinia'
  import contactme from './contactMe.vue'
  import log from './log.vue'
  import about from './about.vue'
  import { screenWidth } from '../main'
  import datetime from './datetime.vue'

  const systemTheme = matchMedia('(prefers-color-scheme: dark)')
  const chooseTheme = (value) => {
    theme().theme = value
  }

  const followSystemThemeChange = () => {
    if (systemTheme.matches) document.documentElement.setAttribute('data-theme', 'dark')
    else document.documentElement.setAttribute('data-theme', 'light')
  }

  const themeChange = (value) => {
    if (value == 'followSystem') {
      systemTheme.addEventListener('change', followSystemThemeChange)
      followSystemThemeChange()
    } else {
      systemTheme.removeEventListener('change', followSystemThemeChange)
      if (value == 'light') document.documentElement.setAttribute('data-theme', 'light')
      else if (value == 'dark') document.documentElement.setAttribute('data-theme', 'dark')
    }
  }

  theme().$subscribe((mutation) => {
    let oldValue = mutation.events.oldValue
    let newValue = mutation.events.newValue
    if (mutation.storeId === 'theme' && oldValue != newValue) themeChange(newValue)
  })

  themeChange(theme().theme)

  const logDrawer = ref(false)
  const aboutDrawer = ref(false)
</script>
<template>
  <div class="container">
    <div class="content">
      <div @touchstart="" class="item datetime"><datetime></datetime></div>
      <a href="https://navigate.jayhu.site/" target="_blank" @touchstart="" class="item"><img class="icon" src="../../public/navigate.svg" alt="" /><span>导航</span></a>
      <div @touchstart="" class="item"><img class="icon" src="../../public/demo.svg" alt="" /><span>小项目</span></div>
      <div class="item" @click="logDrawer = true"><img class="icon" src="../../public/log.svg" alt="" /><span>日志</span></div>
      <div @touchstart="" @click="aboutDrawer = true" class="item"><img class="icon" src="../../public/about.svg" alt="" /><span>关于</span></div>
      <div @touchstart="" class="item theme">
        <div class="themeDiv">
          <img class="icon" src="../../public/theme.svg" alt="" />
          <span>主题</span>
        </div>
        <el-radio-group v-model="theme().theme" @change="chooseTheme">
          <el-radio-button label="浅色" value="light" />
          <el-radio-button label="跟随系统" value="followSystem" />
          <el-radio-button label="深色" value="dark" />
        </el-radio-group>
      </div>
      <div @touchstart="" class="item contactMe" v-if="screenWidth <= 833">
        <contactme></contactme>
      </div>
    </div>
  </div>
  <el-drawer v-if="screenWidth > 833" v-model="aboutDrawer" :direction="'rtl'">
    <template #header> <h1 style="color: var(--font-color); font-size: 38px; font-weight: bolder">关于</h1></template>
    <about></about>
  </el-drawer>
  <el-drawer v-else v-model="aboutDrawer" :direction="'btt'" size="70%">
    <template #header> <h1 style="color: var(--font-color); font-size: 38px; font-weight: bolder">关于</h1></template>
    <about></about>
  </el-drawer>
  <el-drawer v-if="screenWidth > 833" v-model="logDrawer" :direction="'rtl'">
    <template #header> <h1 style="color: var(--font-color); font-size: 38px; font-weight: bolder">日志</h1></template>
    <log></log>
  </el-drawer>
  <el-drawer v-else v-model="logDrawer" :direction="'btt'" size="60%">
    <template #header> <h1 style="color: var(--font-color); font-size: 38px; font-weight: bolder">日志</h1></template>
    <log></log>
  </el-drawer>
</template>
<style scoped>
  .content {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .item {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
    color: var(--font-color);
    background-color: var(--background-color);
    backdrop-filter: blur(var(--blur));
    -webkit-backdrop-filter: blur(var(--blur));
    border-radius: var(--border-radius);
    transition: transform var(--element-hover-transition-time), background-color var(--theme-transition-time);
  }

  .icon {
    width: 40px;
    filter: brightness(var(--icon-color));
  }

  .datetime,
  .theme,
  .contactMe {
    grid-column: span 2;
  }

  .theme {
    flex-direction: row;
    gap: 20px;
  }

  .datetime {
    gap: 0px;
  }
  .themeDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  a {
    text-decoration: none;
  }

  .contactMe {
    justify-content: flex-start;
  }

  @media screen and (min-width: 834px) {
    .item:hover {
      transform: scale(1.03);
    }

    .item:active {
      transform: scale(1);
      background-color: var(--radio-active-background);
    }
  }

  @media screen and (max-width: 833px) {
    .container {
      height: 60%;
    }

    .item {
      height: 40px;
      flex-direction: row;
    }

    .icon {
      width: 25px;
    }

    .datetime {
      height: 60px;
      gap: 15px;
      text-align: center;
    }

    .theme {
      gap: 20px;
    }

    .themeDiv {
      gap: 5px;
    }

    .item:active {
      transform: scale(0.95);
      background-color: var(--radio-active-background);
    }
  }
</style>
