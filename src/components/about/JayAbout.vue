<script setup lang="ts">
  import { HomeRound } from '@vicons/material'
  import gsap from 'gsap'
  import Observer from 'gsap/Observer'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { renderIcon } from '../../lib/navigate'

  const props = withDefaults(
    defineProps<{
      sections: { bg: string; title: string; introduction?: string }[]
      isMobile: boolean
      bingBackgroundSrc: string
    }>(),
    {
      sections: () => [],
      isMobile: false,
      bingBackgroundSrc: ''
    }
  )

  const sectionsRef = ref<HTMLElement[]>([])
  const outerRef = ref<HTMLElement[]>([])
  const innerRef = ref<HTMLElement[]>([])
  const contentRef = ref<HTMLElement[]>([])
  let wrap: (index: number) => number
  let currentIndex = -1
  let animating = false
  let observer: any

  gsap.registerPlugin(Observer)

  const gotoSection = (index: number, direction: number, immediate = false) => {
    const sections = sectionsRef.value
    const outer = outerRef.value
    const inner = innerRef.value
    const contents = contentRef.value

    index = wrap(index)
    animating = true
    const fromTop = direction === -1
    const dFactor = fromTop ? -1 : 1

    if (immediate) {
      // 初始化直接显示
      if (currentIndex >= 0) gsap.set(sections[currentIndex]!, { autoAlpha: 0, zIndex: 0 })
      gsap.set(sections[index]!, { autoAlpha: 1, zIndex: 1 })
      gsap.set([outer[index]!, inner[index]!], { yPercent: 0 })
      gsap.set(contents[index]!, { yPercent: 0 })
      currentIndex = index
      animating = false
      return
    }

    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: 'power1.inOut' },
      onComplete: () => {
        animating = false
      }
    })

    if (currentIndex >= 0) {
      // 上一屏离开
      gsap.set(sections[currentIndex]!, { zIndex: 0 })
      tl.to(contents[currentIndex]!, { yPercent: -15 * dFactor })
        .to([outer[currentIndex]!, inner[currentIndex]!], { yPercent: (i) => (i ? 100 * dFactor : -100 * dFactor) }, 0)
        .set(sections[currentIndex]!, { autoAlpha: 0 })
    }

    // 当前屏显示
    gsap.set(sections[index]!, { autoAlpha: 1, zIndex: 1 })

    // 当前屏进入动画
    tl.fromTo([outer[index]!, inner[index]!], { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) }, { yPercent: 0 }, 0).fromTo(contents[index]!, { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

    currentIndex = index
  }

  onMounted(() => {
    const sections = sectionsRef.value
    const outer = outerRef.value
    const inner = innerRef.value

    wrap = gsap.utils.wrap(0, sections.length)

    gsap.set(sections, { autoAlpha: 0 })
    gsap.set(outer, { yPercent: 100 })
    gsap.set(inner, { yPercent: -100 })

    // 第一次进入直接显示第一屏
    gotoSection(0, 1, true)

    observer = Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    })
  })

  onUnmounted(() => {
    observer.kill()
  })
</script>

<template>
  <div>
    <!-- Header -->
    <header class="fixed top-0 left-0 w-full z-50 flex justify-between p-4 text-white">
      <router-link to="/">
        <n-button class="!text-white" size="large" quaternary :render-icon="renderIcon(HomeRound)"> 返回主页 </n-button>
      </router-link>
    </header>

    <!-- Sections -->
    <section ref="sectionsRef" v-for="(item, index) in sections" :key="index" class="fixed top-0 left-0 w-full h-screen">
      <div ref="outerRef" class="outer w-full h-full overflow-hidden relative">
        <div ref="innerRef" class="inner w-full h-full overflow-hidden relative">
          <div ref="contentRef" class="absolute inset-0 w-full h-full">
            <!-- 背景 -->
            <img v-if="item.title === '背景'" class="absolute inset-0 w-full h-full object-cover" :src="props.bingBackgroundSrc" />
            <img v-else class="absolute inset-0 w-full h-full object-cover" :src="item.bg" />
            <!-- 渐变遮罩，实现官方风格亮度减弱 -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
            <!-- 文字 -->
            <div class="text-white z-10 relative h-full flex flex-col items-center justify-center">
              <p class="font-semibold text-[clamp(1rem,8vw,6rem)]">{{ item.title }}</p>
              <p v-if="item.introduction" class="text-base">{{ item.introduction }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
