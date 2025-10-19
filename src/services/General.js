import { NIcon } from 'naive-ui'
import { h } from 'vue'
import { background } from '@/services/Home'

export const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export const themeOverrides = {
  common: {
    borderRadius: '8px'
  },
  Spin: {
    opacitySpinning: 1
  },
  Layout: {
    footerColor: 'rgba(255, 255, 255, 0)'
  },
  Card: {
    actionColor: 'rgba(0, 0, 0, 0)'
  }
}

/**
 * 根据图片右上角区域亮度返回字体颜色
 * @param {string} imgUrl 图片 URL
 * @returns {Promise<'black' | 'white'>}
 */
export const getFontColorFromImage = (imgUrl) => {
  return new Promise((resolve) => {
    if (!imgUrl) return resolve('black')
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = imgUrl
    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0)
      // 右上角区域：向左 75%，向下 50%
      const regionWidth = image.width * 0.75
      const regionHeight = image.height * 0.5
      const startX = image.width - regionWidth
      const startY = 0

      const data = ctx.getImageData(startX, startY, regionWidth, regionHeight).data
      let total = 0
      const step = 4 * 10 // 每 10 像素取样
      const factor = background.value.style.brightness / 100 // 转换为系数
      for (let i = 0; i < data.length; i += step) {
        const r = data[i] * factor
        const g = data[i + 1] * factor
        const b = data[i + 2] * factor
        total += 0.299 * r + 0.587 * g + 0.114 * b
      }
      const avg = total / (data.length / step)
      resolve(avg < 128 ? 'white' : 'black')
    }

    image.onerror = () => {
      resolve('black') // 出错默认黑色
    }
  })
}
