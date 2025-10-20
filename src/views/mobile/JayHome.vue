<script setup>
  import JayAvatar from '@/components/Home/JayAvatar.vue'
  import JayDatetime from '@/components/Home/JayDatetime.vue'
  import JayYiYan from '@/components/Home/JayYiYan.vue'
  import JayFooter from '@/components/JayFooter.vue'
  import JayThemeChange from '@/components/Home/JayThemeChange.vue'
  import JayBackgroundChange from '@/components/Home/JayBackgroundChange.vue'
  import JayHeatmap from '@/components/Home/JayHeatmap.vue'
  import JayAbout from '@/components/Home/JayAbout.vue'
  import JayContactMe from '@/components/Home/mobile/JayContactMe.vue'
  import JayLog from '@/components/Home/JayLog.vue'
  import JaySite from '@/components/Home/JaySite.vue'
  import JayBackground from '@/components/JayBackground.vue'
  import JayScrollTip from '@/components/Home/JayScrollTip.vue'
  import { themeOverrides, theme, home, handleScroll, background } from '@/services/Home'
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
  <n-config-provider :theme-overrides="theme.current === null ? themeOverrides.light.mobile : themeOverrides.dark.mobile">
    <jay-background />
    <n-layout class="h-full">
      <n-layout-content position="absolute" class="!bg-inherit !bottom-8" :content-class="`p-2 hide-scrollbar *:flex *:flex-col ${background.scrollY == 0 ? '' : 'overflow-hidden'}`">
        <div class="h-full justify-between items-center mb-4 gap-2">
          <jay-avatar class="!w-68" />
          <div class="w-full *:w-full flex flex-col gap-1" :style="{ color: background.fontColor }">
            <div class="grid grid-cols-2 items-center">
              <jay-datetime :date-text-align="'text-left'" :time-text-align="'text-right'" />
            </div>
            <div>
              <jay-yi-yan />
            </div>
            <div class="flex flex-row justify-center gap-2">
              <jay-contact-me />
            </div>
          </div>
          <div class="w-full">
            <n-card title="站点" size="small" content-class="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
              <jay-site :card-size="'small'" :icon-size="30" :direction="'col'" :text-class="'text-base'" />
            </n-card>
            <jay-scroll-tip />
          </div>
        </div>
        <div class="gap-2">
          <jay-heatmap :card-size="'small'" :heatmap-size="'small'" />
          <jay-theme-change />
          <jay-background-change />
          <jay-about :card-size="'small'" />
          <n-card size="small" v-slide-in class="interaction" title="日志" @touchstart="">
            <jay-log />
          </n-card>
          <n-card size="small" v-slide-in class="interaction" title="技术栈" @touchstart="" content-class="flex flex-row flex-wrap gap-2">
            <n-button round secondary size="small" v-for="item in home.techList" tag="a" :href="item.href" target="_blank">
              {{ item.name }}
            </n-button>
          </n-card>
        </div>
      </n-layout-content>
      <n-layout-footer position="absolute" class="flex flex-row justify-center items-center gap-2 p-1">
        <jay-footer />
      </n-layout-footer>
    </n-layout>
    <div :class="`h-screen invisible ${background.scrollDone ? '' : 'hidden'}`"></div>
  </n-config-provider>
</template>
