<script setup lang="ts">
import { useGeneralStore } from '../../stores'

const general = useGeneralStore()
</script>

<template>
  <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
  <div
    :class="[
      'relative p-4 flex gap-10 items-center justify-center',
      general.isMobile ? 'flex-col' : 'flex-row pr-14'
    ]"
  >
    <div class="text-white z-10 max-w-lg text-base text-justify">
      <p class="font-semibold text-[clamp(3rem,5vw,6rem)] text-center indent-0">开往</p>
      <p>
        <a class="hover:underline" href="https://www.travellings.cn/" target="_blank">travellings</a
        >（开往）是一个连接独立网站的友链项目，通过随机跳转的方式，让访客在不同站点之间自由穿梭，像搭乘一列没有终点的列车，在网络世界中不断发现新的内容与创作者。
      </p>
      <p>它致力于让传统友链"活跃"起来，让网站之间形成连接与流动，共同构建一个更加开放、多元的互联网环境。</p>
      <p class="mt-4">本站暂未接入"开往"，后续会考虑申请加入。</p>
    </div>
    <div class="relative">
      <div
        class="absolute w-full h-full blur-[80px] rounded-full bg-[linear-gradient(-45deg,#a1ccce_50%,#faf7f0_50%)]"
      ></div>
      <img class="relative z-10" src="/travelling.png" />
    </div>
  </div>
</template>
