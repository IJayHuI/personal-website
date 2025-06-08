import router from '../routes'
import { ref, markRaw } from 'vue' // 使用 markRaw 包装了 Log 和 About 组件，以防止它们被转换为响应式对象
import Log from '../components/Home/Log.vue'
import About from '../components/Home/About.vue'

export const rotateStatus = ref(false)

export const headIconImgs = ref({
  background: 'background-image: linear-gradient(135deg, #E2B0FF 10%, #9F44D3 100%);',
  icon: '/avatar/icon1.png'
})

export const headIconClick = () => {
  headIconImgs.value = {
    background: `background-image: linear-gradient(${headIconInfo.value.backgroundLinearGradient[Math.round(Math.random() * (headIconInfo.value.backgroundLinearGradient.length - 1))]});`,
    icon: `/avatar/icon${Math.round(Math.random() * (6 - 1) + 1)}.png`
  }
}

export const headIconRotateClick = () => {
  if (headIconInfo.value.clickCount > headIconInfo.value.texts.length - 1) headIconInfo.value.text = `算了，你点吧！${headIconInfo.value.clickCount - headIconInfo.value.texts.length + 1}`
  else headIconInfo.value.text = headIconInfo.value.texts[headIconInfo.value.clickCount]

  if (rotateStatus.value) headIconInfo.value.clickCount++
}

export const headIconInfo = ref({
  clickCount: 0,
  text: '你好',
  texts: ['这里没有东西', '哟，又点了一次！', '真没有！', '你有点执着啊！', '你还在点？认真的吗？', '够了吧，这真没东西！', '行行行，你赢了！', '最后一次了，别再点了！'],
  backgroundLinearGradient: [
    '135deg, #FDEB71 10%, #F8D800 100%',
    '135deg, #E2B0FF 10%, #9F44D3 100%',
    '135deg, #FEB692 10%, #EA5455 100%',
    '135deg, #90F7EC 10%, #32CCBC 100%',
    '135deg, #A0FE65 10%, #FA016D 100%',
    '135deg, #81FFEF 10%, #F067B4 100%',
    '135deg, #EE9AE5 10%, #5961F9 100%',
    '135deg, #70F570 10%, #49C628 100%'
  ]
})

export const handleItemClick = (item) => {
  if (item.type === 'router') {
    router.push(item.router)
  } else if (item.type == 'drawer') {
    drawerData.value = {
      active: true,
      title: item.name,
      component: item.component
    }
  }
}

export const contactShowInfo = ref({})

export const contactInfos = ref([
  {
    link: 'https://github.com/IJayHuI',
    icon: `<svg t="1749313179965" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9983" width="200" height="200"><path d="M512 73.142857c242.285714 0 438.857143 196.571429 438.857143 438.857143 0 193.718857-125.696 358.290286-299.995429 416.585143-22.272 3.986286-30.281143-9.728-30.281143-21.138286 0-14.299429 0.585143-61.696 0.585143-120.576 0-41.142857-13.714286-67.437714-29.696-81.152 97.718857-10.861714 200.557714-48.018286 200.557715-216.576 0-48.018286-17.152-86.857143-45.129143-117.723428 4.571429-11.446857 19.419429-55.990857-4.571429-116.553143-36.571429-11.446857-120.576 45.129143-120.576 45.129143a412.525714 412.525714 0 0 0-219.428571 0S318.317714 243.419429 281.746286 254.866286c-23.990857 60.562286-9.142857 105.142857-4.571429 116.553143-28.013714 30.866286-45.129143 69.705143-45.129143 117.723428 0 168.009143 102.290286 205.714286 200.009143 216.576-12.580571 11.446857-23.990857 30.866286-28.013714 58.843429-25.161143 11.446857-89.161143 30.866286-127.414857-36.571429-23.990857-41.728-67.437714-45.129143-67.437715-45.129143-42.861714-0.585143-2.852571 26.843429-2.852571 26.843429 28.562286 13.129143 48.566857 64 48.566857 64 25.709714 78.299429 148.004571 52.004571 148.004572 52.004571 0 36.571429 0.585143 70.838857 0.585142 81.700572 0 11.446857-8.009143 25.161143-30.281142 21.138285C198.912 870.253714 73.216 705.682286 73.216 511.963429c0-242.285714 196.571429-438.857143 438.857143-438.857143zM239.433143 703.414857c1.133714-2.304-0.585143-5.156571-3.986286-6.838857-3.437714-1.133714-6.290286-0.585143-7.424 1.133714-1.133714 2.304 0.585143 5.156571 3.986286 6.838857 2.852571 1.718857 6.290286 1.133714 7.424-1.133714z m17.700571 19.456c2.304-1.718857 1.718857-5.705143-1.133714-9.142857-2.852571-2.852571-6.838857-3.986286-9.142857-1.718857-2.304 1.718857-1.718857 5.705143 1.133714 9.142857 2.852571 2.852571 6.838857 3.986286 9.142857 1.718857z m17.152 25.709714c2.852571-2.304 2.852571-6.838857 0-10.861714-2.304-3.986286-6.838857-5.705143-9.728-3.437714-2.852571 1.718857-2.852571 6.290286 0 10.276571s7.424 5.705143 9.728 3.986286z m23.990857 23.990858c2.304-2.304 1.133714-7.424-2.304-10.861715-3.986286-3.986286-9.142857-4.571429-11.446857-1.718857-2.852571 2.304-1.718857 7.424 2.304 10.861714 3.986286 3.986286 9.142857 4.571429 11.446857 1.718858z m32.585143 14.299428c1.133714-3.437714-2.304-7.424-7.424-9.142857-4.571429-1.133714-9.728 0.585143-10.861714 3.986286s2.304 7.424 7.424 8.557714c4.571429 1.718857 9.728 0 10.861714-3.437714z m35.986286 2.852572c0-3.986286-4.571429-6.838857-9.728-6.290286-5.156571 0-9.142857 2.852571-9.142857 6.290286 0 3.986286 3.986286 6.838857 9.728 6.290285 5.156571 0 9.142857-2.852571 9.142857-6.290285z m33.133714-5.705143c-0.585143-3.437714-5.156571-5.705143-10.276571-5.156572-5.156571 1.133714-8.557714 4.571429-8.009143 8.557715 0.585143 3.437714 5.156571 5.705143 10.276571 4.571428s8.557714-4.571429 8.009143-8.009143z" fill="" p-id="9984"></path></svg>`,
    text: 'Github',
    mobileText: '去 GitHub 主页'
  },
  {
    link: 'https://space.bilibili.com/474262477',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></g></svg>`,
    text: '(゜-゜)つロ 干杯~-bilibili',
    mobileText: '去 Bilibili 主页'
  },
  {
    link: 'mailto:2949763264@qq.com',
    icon: `<svg t="1749313856673" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4544" width="200" height="200"><path d="M853.333333 170.666667 170.666667 170.666667C123.733333 170.666667 85.333333 209.066667 85.333333 256l0 512c0 46.933333 38.4 85.333333 85.333333 85.333333l682.666667 0c46.933333 0 85.333333-38.4 85.333333-85.333333L938.666667 256C938.666667 209.066667 900.266667 170.666667 853.333333 170.666667zM853.333333 341.333333l-341.333333 213.333333L170.666667 341.333333 170.666667 256l341.333333 213.333333 341.333333-213.333333L853.333333 341.333333z" p-id="4545"></path></svg>`,
    text: 'email～',
    mobileText: '给我发邮件'
  },
  {
    link: 'https://t.me/IJayHuI',
    icon: `<svg t="1749314224663" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7632" width="200" height="200"><path d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m243.6 339.8l-81.4 383.6c-6 27.2-22.2 33.8-44.8 21l-124-91.4-59.8 57.6c-6.6 6.6-12.2 12.2-25 12.2l8.8-126.2 229.8-207.6c10-8.8-2.2-13.8-15.4-5l-284 178.8-122.4-38.2c-26.6-8.4-27.2-26.6 5.6-39.4l478.2-184.4c22.2-8 41.6 5.4 34.4 39z" fill="" p-id="7633"></path></svg>`,
    text: 'Oops!',
    mobileText: '去 Telegram'
  }
])

export const techList = ref([
  {
    href: 'https://www.naiveui.com/zh-CN/os-theme',
    name: 'Naive UI'
  },
  {
    href: 'https://vitejs.cn/',
    name: 'Vite'
  },
  {
    href: 'https://vitejs.cn/',
    name: 'Vite'
  },
  {
    href: 'https://cn.vuejs.org/',
    name: 'Vue'
  },
  {
    href: 'https://www.axios-http.cn/',
    name: 'Axios'
  },
  {
    href: 'https://strapi.io/',
    name: 'Strapi'
  }
])

export const items = [
  {
    name: '导航页',
    icon: 'BookmarksRound',
    type: 'router',
    router: '/navigate'
  },
  {
    name: '小项目',
    icon: 'FolderRound',
    type: 'router',
    router: '/project'
  },
  {
    name: '日志',
    icon: 'LogoDevRound',
    type: 'drawer',
    component: markRaw(Log)
  },
  {
    name: '关于',
    icon: 'InfoRound',
    type: 'drawer',
    component: markRaw(About)
  }
]

export const lightThemeOverrides = {
  desktop: {
    Card: {
      color: 'rgba(255, 255, 255, 0.5)',
      colorModal: 'rgba(255, 255, 255, 0.5)',
      borderColor: 'rgba(239, 239, 245, 0.3)',
      borderRadius: '10px',
      paddingHuge: '30px 20px'
    },
    Layout: {
      color: 'rgba(0, 0, 0, 0)',
      footerColor: 'rgba(255, 255, 255, 0.4)',
      textColor: '#000'
    },
    Drawer: {
      borderRadius: '10px',
      color: 'rgba(255, 255, 255, 0.7)'
    }
  },
  mobile: {
    Card: {
      color: 'rgba(255, 255, 255, 0.5)',
      colorModal: 'rgba(255, 255, 255, 0.5)',
      borderColor: 'rgba(239, 239, 245, 0.3)',
      borderRadius: '10px',
      paddingHuge: '10px'
    },
    Layout: {
      color: 'rgba(0, 0, 0, 0)',
      footerColor: 'rgba(255, 255, 255, 0.4)',
      textColor: '#000'
    },
    Drawer: {
      borderRadius: '10px',
      color: 'rgba(255, 255, 255, 0.7)'
    }
  }
}

export const darkThemeOverrides = {
  desktop: {
    Card: {
      color: 'rgba(24, 24, 28, 0.5)',
      colorModal: 'rgba(44, 44, 50, 0.5)',
      borderRadius: '10px',
      paddingHuge: '30px 20px'
    },
    Layout: {
      color: 'rgba(16, 16, 20, 0.4)',
      footerColor: 'rgba(24, 24, 28, 0.4)'
    },
    Drawer: {
      borderRadius: '10px',
      color: 'rgba(44, 44, 50, 0.5)'
    }
  },
  mobile: {
    Card: {
      color: 'rgba(24, 24, 28, 0.5)',
      colorModal: 'rgba(44, 44, 50, 0.5)',
      borderRadius: '10px',
      paddingHuge: '10px'
    },
    Layout: {
      color: 'rgba(16, 16, 20, 0.4)',
      footerColor: 'rgba(24, 24, 28, 0.4)'
    },
    Drawer: {
      borderRadius: '10px',
      color: 'rgba(44, 44, 50, 0.5)'
    }
  }
}

export const drawerData = ref({
  active: false,
  title: '',
  component: ''
})

export const handleClickOrHoverContactIcon = (item) => {
  if (item == 'null') {
    contactShowInfo.value = {}
  } else contactShowInfo.value = item
}
