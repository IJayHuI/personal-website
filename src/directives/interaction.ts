import type { Directive } from 'vue'
import { gsap } from 'gsap'

interface InteractionEl extends HTMLElement {
  _enter?: () => void
  _leave?: () => void
  _down?: () => void
  _up?: () => void
}

const interaction: Directive = {
  mounted(el: InteractionEl) {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches

    // hover（桌面）
    el._enter = () => {
      if (!isDesktop) return
      gsap.to(el, {
        scale: 1.015,
        duration: 0.2,
        ease: 'power2.out'
      })
    }

    el._leave = () => {
      if (!isDesktop) return
      gsap.to(el, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
    }

    // 按下（移动端 + 桌面）
    el._down = () => {
      gsap.to(el, {
        scale: isDesktop ? 1 : 0.98,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    el._up = () => {
      gsap.to(el, {
        scale: isDesktop ? 1.015 : 1,
        duration: 0.2,
        ease: 'power2.out'
      })
    }

    // 绑定事件
    el.addEventListener('mouseenter', el._enter)
    el.addEventListener('mouseleave', el._leave)
    el.addEventListener('mousedown', el._down)
    el.addEventListener('mouseup', el._up)

    // 移动端
    el.addEventListener('touchstart', el._down)
    el.addEventListener('touchend', el._up)
  },

  unmounted(el: InteractionEl) {
    el.removeEventListener('mouseenter', el._enter!)
    el.removeEventListener('mouseleave', el._leave!)
    el.removeEventListener('mousedown', el._down!)
    el.removeEventListener('mouseup', el._up!)
    el.removeEventListener('touchstart', el._down!)
    el.removeEventListener('touchend', el._up!)
  }
}

export default interaction
