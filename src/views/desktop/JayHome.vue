<script setup>
  import JayFooter from '@/components/JayFooter.vue'
  import JayAvatar from '@/components/Home/JayAvatar.vue'
  import JayAbout from '@/components/Home/JayAbout.vue'
  import JayContactMe from '@/components/Home/desktop/JayContactMe.vue'
  import JayDatetime from '@/components/Home/JayDatetime.vue'
  import JayThemeChange from '@/components/Home/JayThemeChange.vue'
  import JayBackgroundChange from '@/components/Home/JayBackgroundChange.vue'
  import JayLog from '@/components/Home/JayLog.vue'
  import JayHeatmap from '@/components/Home/JayHeatmap.vue'
  import JayYiYan from '@/components/Home/JayYiYan.vue'
  import * as icons from '@vicons/material'
  import { darkThemeOverrides, lightThemeOverrides, theme, home, background, handleScroll } from '@/services/Home'
  import { RouterLink } from 'vue-router'
  import { onMounted, onBeforeUnmount } from 'vue'

  const handleElScroll = () => {
    const el = document.querySelectorAll('.n-layout-scroll-container')
    background.value.scrollProgress = (el[el.length - 1].scrollTop / (el[el.length - 1].scrollHeight - el[el.length - 1].clientHeight)).toFixed(1)
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    const el = document.querySelectorAll('.n-layout-scroll-container') // 找到内容容器
    el[el.length - 1].addEventListener('scroll', handleElScroll)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    const el = document.querySelectorAll('.n-layout-scroll-container')
    el[el.length - 1].removeEventListener('scroll', handleElScroll)
  })
</script>
<template>
  <n-config-provider :theme-overrides="theme.current === null ? lightThemeOverrides.desktop : darkThemeOverrides.desktop">
    <n-layout class="!mx-auto max-w-7xl h-full" has-sider>
      <n-layout-sider width="300" content-class="p-4">
        <div class="w-full h-full flex flex-col justify-start items-center gap-2">
          <jay-avatar v-slide-in />
          <n-card size="small" v-slide-in class="interaction" title="日志" @touchstart="">
            <jay-log />
          </n-card>
          <n-card size="small" v-slide-in class="interaction" title="技术栈" @touchstart="">
            <n-space>
              <n-button round secondary size="small" v-for="item in home.techList" tag="a" :href="item.href" target="_blank">
                {{ item.name }}
              </n-button>
            </n-space>
          </n-card>
          <n-card size="small" v-slide-in class="interaction" content-class="flex flex-col justify-center items-center">
            <jay-footer />
          </n-card>
        </div>
      </n-layout-sider>
      <n-layout-content class="!bg-inherit" :content-class="`p-4 hide-scrollbar *:flex *:flex-col ${background.scrollY == 0 ? '' : 'overflow-hidden'}`">
        <div class="justify-between mb-8 h-full">
          <span class="opacity-0"><!-- 占位 --></span>
          <div :class="`w-full grid grid-cols-2 *:text-${background.fontColor}`">
            <div class="flex flex-col items-start justify-center gap-2">
              <div>
                <jay-yi-yan />
              </div>
              <div class="flex gap-2">
                <jay-contact-me />
              </div>
            </div>
            <div class="flex flex-col items-end justify-center">
              <jay-datetime :date-text-align="'right'" :time-text-align="'right'" />
            </div>
          </div>
          <n-card v-slide-in title="站点">
            <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
              <router-link v-for="site in home.sites" :key="site.router" :to="site.router">
                <n-card class="interaction">
                  <div class="flex justify-center items-center gap-2">
                    <n-icon size="35"><component :is="icons[site.icon]" /></n-icon>
                    <p class="text-xl font-bold">{{ site.name }}</p>
                  </div>
                </n-card>
              </router-link>
            </div>
          </n-card>
        </div>
        <div class="gap-2">
          <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-2">
            <jay-theme-change />
            <jay-background-change />
          </div>
          <jay-heatmap />
          <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-2">
            <jay-about />
          </div>
        </div>
      </n-layout-content>
    </n-layout>
    <div :class="`h-screen invisible ${background.scrollDone ? '' : 'hidden'}`"></div>
  </n-config-provider>
</template>
