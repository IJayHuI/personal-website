import { ref } from 'vue'
import axios from 'axios'
import * as icons from '@vicons/material'
import { baseUrl, loadingStatus } from '@/main'
import { renderIcon } from '@/services/General'

export const expandedNames = ref([])
export const datas = ref([])
export const drawerStatus = ref(false)
export const drawerData = ref({
  active: false,
  title: '',
  content: '',
  link: '',
  needProxy: false,
  category: ''
})

// Navigate 主题设置
export const darkThemeOverrides = {
  mobile: {
    Button: {
      color: 'rgb(16, 16, 20)',
      colorHover: 'rgb(16, 16, 20)',
      colorPressed: 'rgb(16, 16, 20)',
      colorFocus: 'rgb(16, 16, 20)'
    }
  }
}
export const lightThemeOverrides = {
  mobile: {
    Button: {
      color: 'rgb(255, 255, 255)',
      colorHover: 'rgb(255, 255, 255)',
      colorPressed: 'rgb(255, 255, 255)',
      colorFocus: 'rgb(255, 255, 255)'
    }
  }
}

export const menuOptions = ref([
  {
    label: '关闭所有',
    key: 'closeAll',
    icon: renderIcon(icons['CloseFullscreenRound'])
  },
  {
    label: '展开所有',
    icon: renderIcon(icons['FormatListBulletedRound']),
    key: 'expandedAll',
    onClick: () => {
      datas.value.map((item) => {
        expandedNames.value.push(item.documentId)
      })
    }
  }
])

export const getData = () => {
  loadingStatus.value = true
  axios
    .get(`${baseUrl.server}/navigate-groups?populate=item`)
    .then((response) => {
      datas.value = response.data.data
      console.log(datas.value)
      datas.value.map((item) => {
        menuOptions.value.push({
          label: item.name,
          key: item.documentId,
          icon: renderIcon(icons[item.icon])
        })
        expandedNames.value.push(item.documentId)
      })
      setTimeout(() => {
        loadingStatus.value = false
      }, 500)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const copyLink = async () => {
  const link = drawerData.value.link
  if (!link) throw '暂无可复制的链接'
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(link)
    else {
      const textarea = document.createElement('textarea')
      textarea.value = link
      textarea.style.position = 'fixed'
      textarea.style.top = '0'
      textarea.style.left = '0'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textarea)
      if (!successful) throw '复制失败，请手动复制'
    }
    return '已复制到剪贴板'
  } catch (error) {
    throw '复制失败，请手动复制'
  }
}
