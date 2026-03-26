<script setup lang="ts">
  import { RemoveRedEyeRound } from '@vicons/material'
  import { NImageGroup } from 'naive-ui'
  import { ref } from 'vue'

  import type { BingBackground } from '../../stores'

  import { renderIcon } from '../../lib/navigate'

  const props = withDefaults(
    defineProps<{
      bingBackground?: BingBackground
      backgroundList?: string[]
    }>(),
    {
      bingBackground: () => ({
        src: '',
        copyright: '',
        title: ''
      }),
      backgroundList: () => []
    }
  )
  const showImages = ref(false)
</script>
<template>
  <img class="absolute w-full h-full object-cover" :src="props.bingBackground.src" />
  <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
  <div class="relative text-white z-10 max-w-xl text-base text-justify p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <p class="font-semibold text-[clamp(3rem,5vw,6rem)] text-center">背景</p>
    <p>主页使用 Bing 必应壁纸作为网页背景。如果无法正常访问则使用站内图片代替。</p>
    <p>这里展示了站内壁纸和 Bing 每日精选壁纸，让页面更有视觉氛围。</p>
    <p>本网站的站内壁纸来自于 <a class="hover:underline" href="https://github.com/imsyy/home" target="_blank">imsyy/home</a> 项目。</p>
    <p class="mt-4 font-medium">今日壁纸：{{ props.bingBackground.title }}</p>
    <p>{{ props.bingBackground.copyright }}</p>
    <n-space justify="center">
      <n-button class="!text-white" size="large" secondary tag="a" target="_blank" href="https://www.todaybing.com/">
        <template #icon>
          <n-icon>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Bing</title>
              <path
                d="M4.842.005a.966.966 0 01.604.142l2.62 1.813c.369.256.492.352.637.496.471.47.752 1.09.797 1.765l.008.847.003 1.441.004 13.002.144-.094 7.015-4.353.015.003.029.01c-.398-.17-.893-.339-1.655-.566l-.484-.146c-.584-.18-.71-.238-.921-.38a2.009 2.009 0 01-.37-.312 2.172 2.172 0 01-.41-.592L11.32 9.063c-.166-.444-.166-.49-.156-.63a.92.92 0 01.806-.864l.094-.01c.044-.005.22.023.29.044l.052.021c.06.026.16.075.313.154l3.63 1.908a6.626 6.626 0 013.292 4.531c.194.99.159 2.037-.102 3.012-.216.805-.639 1.694-1.054 2.213l-.08.099-.047.05c-.01.01-.013.01-.01.002l.043-.074-.072.114c-.011.031-.233.28-.38.425l-.17.161c-.22.202-.431.36-.832.62L13.544 23c-.941.6-1.86.912-2.913.992-.23.018-.854.008-1.074-.017a6.31 6.31 0 01-1.658-.412c-1.854-.738-3.223-2.288-3.705-4.195a8.077 8.077 0 01-.121-.57l-.046-.325a1.123 1.123 0 01-.014-.168l-.006-.029L4 11.617 4.01.866a.981.981 0 01.007-.111.943.943 0 01.825-.75z"></path>
            </svg>
          </n-icon>
        </template>
        前往必应壁纸查看更多
      </n-button>
      <n-button class="!text-white" size="large" secondary :render-icon="renderIcon(RemoveRedEyeRound)" @click="showImages = true">查看所有壁纸</n-button>
    </n-space>
  </div>
  <n-image-group v-model:show="showImages" :src-list="props.backgroundList" />
</template>
