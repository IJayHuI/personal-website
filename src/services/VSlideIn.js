const distance = 64
const duration = 650
const map = new WeakMap()
const ob = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animation = map.get(entry.target)
      if (animation) {
        animation.play()
        ob.unobserve(entry.target)
      }
    }
  })
})

// 根据位置计算延迟
const calculateDelay = (el, baseDelay = 3.5) => {
  const rect = el.getBoundingClientRect()
  const row = Math.floor(rect.top)
  const col = Math.floor(rect.left)
  return (row + col) / baseDelay
}

const isBelowViewport = (el) => {
  const rect = el.getBoundingClientRect()
  return rect.top + distance >= window.innerHeight
}

export default {
  mounted(el) {
    el.style.transform = `translateY(${distance}px)`
    el.style.opacity = '0'
    const delay = isBelowViewport(el) ? calculateDelay(el, 10) : calculateDelay(el)
    const animation = el.animate(
      [
        { transform: `translateY(${distance}px)`, opacity: 0 },
        { transform: `translateY(0)`, opacity: 1 }
      ],
      {
        duration: duration,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: delay
      }
    )
    animation.pause()
    ob.observe(el)
    map.set(el, animation)
  },
  onmounted(el) {
    ob.unobserve(el)
  }
}
