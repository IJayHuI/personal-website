import router from '../routes'
import { ref } from 'vue'

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
    id: '0',
    link: 'https://github.com/IJayHuI',
    icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36 36" enable-background="new 0 0 36 36" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M18,1.4C9,1.4,1.7,8.7,1.7,17.7c0,7.2,4.7,13.3,11.1,15.5
	c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1
	c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4
	c-0.2-0.4-0.7-2.1,0.2-4.3c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7
	c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5
c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C34.3,8.7,27,1.4,18,1.4z"/></svg>`,
    text: 'Github',
    mobileText: '去 GitHub 主页'
  },
  {
    id: '1',
    link: 'https://space.bilibili.com/474262477',
    icon: `<svg width="24" height="24" viewBox="-2 -2 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="#ffffff"></path></svg>`,
    text: '(゜-゜)つロ 干杯~-bilibili',
    mobileText: '去 Bilibili 主页'
  },
  {
    id: '2',
    link: 'mailto:2949763264@qq.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" fill="#ffffff"></path></svg>`,
    text: 'email～',
    mobileText: '给我发邮件'
  },
  {
    id: '3',
    link: 'https://t.me/IJayHuI',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="35.2393" height="34.8804"><g><rect height="34.8804" opacity="0" width="35.2393" x="0" y="0"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z" fill="#ffffff"></path></g></svg>`,
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
    component: '../../components/Home/Log.vue'
  },
  {
    name: '关于',
    icon: 'InfoRound',
    type: 'drawer',
    component: '../../components/Home/About.vue'
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
    },
    Radio: {
      buttonColor: 'rgba(0,0,0, 0)',
      buttonColorActive: 'rgb(255, 255, 255)',
      buttonTextColorHover: 'rgb(255, 255, 255)',
      buttonBorderColorActive: 'rgb(255, 255, 255)',
      buttonBorderColorHover: 'rgb(255, 255, 255)',
      buttonTextColorActive: '#000'
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
    },
    Radio: {
      buttonColor: 'rgba(0,0,0, 0)',
      buttonColorActive: 'rgb(255, 255, 255)',
      buttonTextColorHover: 'rgb(255, 255, 255)',
      buttonBorderColorActive: 'rgb(255, 255, 255)',
      buttonBorderColorHover: 'rgb(255, 255, 255)',
      buttonTextColorActive: '#000'
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
    },
    Radio: {
      buttonColorActive: 'rgb(255, 255, 255)',
      buttonBorderColorActive: 'rgb(255, 255, 255)',
      buttonBorderColorHover: 'rgb(255, 255, 255)',
      buttonTextColorHover: 'rgb(255, 255, 255)',
      buttonTextColorHover: 'rgb(255, 255, 255)',
      buttonTextColorActive: '#000'
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
    },
    Radio: {
      buttonColorActive: 'rgb(255, 255, 255)',
      buttonBorderColorActive: 'rgb(255, 255, 255)',
      buttonBorderColorHover: 'rgb(255, 255, 255)',
      buttonTextColorHover: 'rgb(255, 255, 255)',
      buttonTextColorHover: 'rgb(255, 255, 255)',
      buttonTextColorActive: '#000'
    }
  }
}

export const drawerData = ref({
  active: false,
  title: '',
  component: ''
})

export const handleClickMobileContactIcon = (item) => {
  contactShowInfo.value = item
}
