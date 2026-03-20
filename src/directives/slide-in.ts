import type { Directive } from 'vue'
import gsap from 'gsap'

interface SlideInEl extends HTMLElement {
  _observer?: IntersectionObserver
  _animation?: gsap.core.Tween
}

const slideIn: Directive = {
  mounted(el: SlideInEl) {
    // 初始状态（类似 Apple 官网）
    gsap.set(el, {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: 'blur(6px)',
      willChange: 'transform, opacity, filter'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (!entry) return
        if (entry.isIntersecting) {
          el._animation = gsap.to(el, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              el.style.willChange = 'auto'
            }
          })

          // 只触发一次
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    )

    observer.observe(el)
    el._observer = observer
  },

  unmounted(el: SlideInEl) {
    el._observer?.disconnect()
    el._animation?.kill()
  }
}

export default slideIn
