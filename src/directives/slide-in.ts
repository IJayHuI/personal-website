import type { Directive } from 'vue'

interface SlideInEl extends HTMLElement {
  _observer?: IntersectionObserver
}

const slideIn: Directive = {
  mounted(el: SlideInEl) {
    // 初始状态（类似 Apple 官网）
    el.classList.add('slide-in-init')

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (!entry) return
        if (entry.isIntersecting) {
          el.classList.add('slide-in-active')

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
  }
}

export default slideIn
