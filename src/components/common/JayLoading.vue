<script setup lang="ts">
  import gsap from 'gsap'
  import { ref, watch, onBeforeUnmount } from 'vue'
  import { useGeneralStore } from '../../stores'
  import generalConfig from '../../configs/general.json'

  const general = useGeneralStore()
  const visible = ref(true)
  const firstShow = ref(true) // 首次显示标记

  // 面板引用
  const topLeftPanelRef = ref<HTMLElement | null>(null)
  const bottomRightPanelRef = ref<HTMLElement | null>(null)
  const spinnerRef = ref<HTMLElement | null>(null)

  const ANIMATION_DURATION = generalConfig.loadingDuration // 秒

  // 根据移动/桌面端获取面板的位移目标
  const getPanelTransforms = () => {
    if (general.isMobile) {
      // 移动端：上面板初始在 -100% y，下面板初始在 100% y，目标为 0
      return {
        topLeft: { initial: { y: '-100%' }, target: { y: '0%' } },
        bottomRight: { initial: { y: '100%' }, target: { y: '0%' } }
      }
    } else {
      // 桌面端：左面板初始在 -100% x，右面板初始在 100% x，目标为 0
      return {
        topLeft: { initial: { x: '-100%' }, target: { x: '0%' } },
        bottomRight: { initial: { x: '100%' }, target: { x: '0%' } }
      }
    }
  }
  // 清理 GSAP 动画
  const killTweens = () => {
    if (topLeftPanelRef.value) gsap.killTweensOf(topLeftPanelRef.value)
    if (bottomRightPanelRef.value) gsap.killTweensOf(bottomRightPanelRef.value)
    if (spinnerRef.value) gsap.killTweensOf(spinnerRef.value)
  }
  const showLoading = () => {
    visible.value = true
    killTweens()

    const panelOne = topLeftPanelRef.value
    const panelTwo = bottomRightPanelRef.value
    const spinner = spinnerRef.value
    if (!panelOne || !panelTwo || !spinner) return

    const transforms = getPanelTransforms()

    // 设置初始位置
    gsap.set(panelOne, transforms.topLeft.initial)
    gsap.set(panelTwo, transforms.bottomRight.initial)

    if (firstShow.value) {
      // 无进入动画或首次显示：直接到位
      gsap.set(panelOne, transforms.topLeft.target)
      gsap.set(panelTwo, transforms.bottomRight.target)
      gsap.set(spinner, { opacity: 1 })
      firstShow.value = false
    } else {
      // 设置 spinner 初始透明度为 0
      gsap.set(spinner, { opacity: 0 })
      // 执行进入动画
      gsap.to(panelOne, {
        ...transforms.topLeft.target,
        duration: ANIMATION_DURATION,
        ease: 'power3.out'
      })
      gsap.to(panelTwo, {
        ...transforms.bottomRight.target,
        duration: ANIMATION_DURATION,
        ease: 'power3.out'
      })
      gsap.to(spinner, {
        opacity: 1,
        duration: ANIMATION_DURATION,
        ease: 'power2.out'
      })
    }
  }
  const hideLoading = () => {
    const panelOne = topLeftPanelRef.value
    const panelTwo = bottomRightPanelRef.value
    const spinner = spinnerRef.value
    if (!panelOne || !panelTwo || !spinner) {
      visible.value = false
      return
    }
    killTweens()
    const transforms = getPanelTransforms()
    // 执行退出动画
    gsap.to(spinner, {
      opacity: 0,
      duration: ANIMATION_DURATION,
      ease: 'power2.in'
    })
    gsap.to(panelOne, {
      ...transforms.topLeft.initial,
      duration: ANIMATION_DURATION,
      ease: 'power3.in'
    })
    gsap.to(panelTwo, {
      ...transforms.bottomRight.initial,
      duration: ANIMATION_DURATION,
      ease: 'power3.in',
      onComplete: () => {
        visible.value = false
      }
    })
  }

  // 监听加载状态变化
  watch(
    () => general.loading.status,
    (loading) => {
      if (loading) showLoading()
      else hideLoading()
    },
    { immediate: true }
  )

  // 组件卸载时清理
  onBeforeUnmount(() => {
    killTweens()
  })
</script>
<template>
  <div class="loading-container" v-show="visible">
    <!-- 上/左面板 -->
    <div ref="topLeftPanelRef" :class="['loading-panel', general.isMobile ? 'loading-panel-top' : 'loading-panel-left', general.isDark ? 'loading-panel-dark' : 'loading-panel-light']" />
    <!-- 下/右面板 -->
    <div ref="bottomRightPanelRef" :class="['loading-panel', general.isMobile ? 'loading-panel-bottom' : 'loading-panel-right', general.isDark ? 'loading-panel-dark' : 'loading-panel-light']" />
    <div ref="spinnerRef" class="w-50 h-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div :class="['spinner', general.isDark ? 'spinner-light' : 'spinner-dark']"></div>
    </div>
  </div>
</template>
<style scoped>
  .loading-container {
    position: fixed;
    inset: 0;
    pointer-events: all;
    overflow: hidden;
    z-index: 9999;
  }
  .loading-panel {
    position: absolute;
  }
  .loading-panel-light {
    background-color: white;
  }
  .loading-panel-dark {
    background-color: black;
  }
  .loading-panel-top {
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    width: 100%;
  }
  .loading-panel-right {
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }
  .loading-panel-bottom {
    left: 0;
    bottom: 0;
    right: 0;
    height: 50%;
    width: 100%;
  }
  .loading-panel-left {
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 50%;
  }
  .spinner,
  .spinner::after,
  .spinner::before {
    border-radius: 50%;
    border: 3px solid transparent;
  }
  .spinner::after,
  .spinner::before {
    content: '';
    position: absolute;
  }
  .spinner {
    width: 100%;
    height: 100%;
    position: relative;
    animation: spin 1.8s linear infinite;
  }
  /* 第二层 */
  .spinner::before {
    inset: 5px;
    animation: spin-reverse 0.6s linear infinite;
  }
  /* 第三层 */
  .spinner::after {
    inset: 12px;
    animation: spin 1s linear infinite;
  }
  .spinner-light {
    border-top-color: white;
  }
  .spinner-light::before {
    border-top-color: #a4a4a4;
  }
  .spinner-light::after {
    border-top-color: #d3d3d3;
  }
  .spinner-dark {
    border-top-color: black;
  }
  .spinner-dark::before {
    border-top-color: #666;
  }
  .spinner-dark::after {
    border-top-color: #999;
  }
  /* 顺时针 */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  /* 逆时针 */
  @keyframes spin-reverse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>
