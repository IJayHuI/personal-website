import type { Directive } from 'vue'
import { gsap } from 'gsap'

interface InteractionEl extends HTMLElement {
  _down?: () => void
  _up?: () => void
}

const interaction: Directive = {
  mounted(el: InteractionEl) {
    // 按下
    el._down = () => {
      gsap.to(el, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    // 松开
    el._up = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
    }

    // 移动端触摸
    el.addEventListener('touchstart', el._down)
    el.addEventListener('touchend', el._up)
    el.addEventListener('touchcancel', el._up)
  },

  unmounted(el: InteractionEl) {
    el.removeEventListener('touchstart', el._down!)
    el.removeEventListener('touchend', el._up!)
    el.removeEventListener('touchcancel', el._up!)
  }
}

export default interaction
