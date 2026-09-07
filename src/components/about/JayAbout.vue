<script setup lang="ts">
import { HomeRound } from '@vicons/material'
import gsap from 'gsap'
import Observer from 'gsap/Observer'
import { ref, onMounted, onUnmounted, type Component } from 'vue'
import { renderIcon } from '../../utils'
import { useGeneralStore } from '../../stores'
import JayFirstPage from './JayFirstPage.vue'
import JaySecondPage from './JaySecondPage.vue'
import JayThirdPage from './JayThirdPage.vue'
import JayFourthPage from './JayFourthPage.vue'

const general = useGeneralStore()

const sections: Component[] = [JayFirstPage, JaySecondPage, JayThirdPage, JayFourthPage]

const sectionsRef = ref<HTMLElement[]>([])
const outerRef = ref<HTMLElement[]>([])
const innerRef = ref<HTMLElement[]>([])
const contentRef = ref<HTMLElement[]>([])
let wrap: (index: number) => number
const currentIndex = ref(-1)
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
    if (currentIndex.value >= 0) gsap.set(sections[currentIndex.value]!, { autoAlpha: 0, zIndex: 0 })
    gsap.set(sections[index]!, { autoAlpha: 1, zIndex: 1 })
    gsap.set([outer[index]!, inner[index]!], { yPercent: 0 })
    gsap.set(contents[index]!, { yPercent: 0 })
    currentIndex.value = index
    animating = false
    return
  }

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'power1.inOut' },
    onComplete: () => {
      animating = false
    }
  })

  if (currentIndex.value >= 0) {
    gsap.set(sections[currentIndex.value]!, { zIndex: 0 })
    tl.to(contents[currentIndex.value]!, { yPercent: -15 * dFactor })
      .to(
        [outer[currentIndex.value]!, inner[currentIndex.value]!],
        { yPercent: (i) => (i ? 100 * dFactor : -100 * dFactor) },
        0
      )
      .set(sections[currentIndex.value]!, { autoAlpha: 0 })
  }

  gsap.set(sections[index]!, { autoAlpha: 1, zIndex: 1 })

  tl.fromTo(
    [outer[index]!, inner[index]!],
    { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
    { yPercent: 0 },
    0
  ).fromTo(contents[index]!, { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)

  currentIndex.value = index
}

const isZoomGesture = (e: WheelEvent) => {
  return e.ctrlKey || Math.abs(e.deltaY) < 1
}

onMounted(() => {
  const sections = sectionsRef.value
  const outer = outerRef.value
  const inner = innerRef.value

  wrap = gsap.utils.wrap(0, sections.length)

  gsap.set(sections, { autoAlpha: 0 })
  gsap.set(outer, { yPercent: 100 })
  gsap.set(inner, { yPercent: -100 })

  gotoSection(0, 1, true)

  observer = Observer.create({
    type: 'wheel,touch',
    wheelSpeed: -1,
    onDown: (self) => {
      const e = self.event as WheelEvent
      if (isZoomGesture(e)) return
      !animating && gotoSection(currentIndex.value - 1, -1)
    },
    onUp: (self) => {
      const e = self.event as WheelEvent
      if (isZoomGesture(e)) return
      if (!animating) gotoSection(currentIndex.value + 1, 1)
    },
    tolerance: 20,
    preventDefault: false
  })
})

onUnmounted(() => {
  observer?.kill()
})
</script>

<template>
  <div>
    <!-- Return -->
    <div :class="['fixed w-full z-50 p-4 text-white', general.isMobile ? 'bottom-0' : 'top-0']">
      <router-link to="/">
        <n-button class="!text-white" size="large" quaternary :render-icon="renderIcon(HomeRound)">
          返回主页
        </n-button>
      </router-link>
    </div>
    <!-- Sections -->
    <section
      ref="sectionsRef"
      v-for="(item, index) in sections"
      :key="index"
      class="fixed top-0 left-0 w-full h-screen"
    >
      <div ref="outerRef" class="outer w-full h-full overflow-hidden relative">
        <div ref="innerRef" class="inner w-full h-full overflow-hidden relative">
          <div
            ref="contentRef"
            class="absolute inset-0 w-full h-full indent-8 flex justify-center items-center"
          >
            <component :is="item" />
          </div>
        </div>
      </div>
    </section>
    <!-- Dots -->
    <div
      :class="[
        'bg-white/40 p-2 backdrop-blur-sm rounded-full fixed right-4 z-50 flex flex-col gap-2',
        general.isMobile ? 'bottom-4' : 'top-1/2 -translate-y-1/2'
      ]"
    >
      <div
        v-for="(_, i) in sections"
        :key="i"
        @click="!animating && i !== currentIndex && gotoSection(i, i > currentIndex ? 1 : -1)"
        class="w-2 h-2 rounded-full cursor-pointer transition-all duration-1000"
        :class="i === currentIndex ? 'bg-white h-6' : 'bg-white/40 hover:bg-white/70'"
      />
    </div>
  </div>
</template>
