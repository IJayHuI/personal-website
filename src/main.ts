import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './root.css'
import './style.css'
import { ElMessage } from 'element-plus'

import App from './App.vue'
import router from './router/index'
createApp(App).use(ElementPlus).use(router).mount('#app')

import { ref } from 'vue'
import axios from 'axios'
import { loadingState } from './App.vue'
export const check = (messageText: string, code: number) => {
  const a = setInterval(() => {
    if (loadingState.value == true) {
      clearInterval(a)
      setTimeout(() => {
        if (code == 200) ElMessage({ message: messageText, type: 'success' })
        else if (code == 500) ElMessage({ message: messageText, type: 'error' })
        else ElMessage({ message: messageText, type: 'warning' })
      }, 2000)
    }
  }, 100)
}

// logsData
export const datas = ref()
axios
  .get('/server/data/logs')
  .then((res: { data: any }) => {
    datas.value = res.data
  })
  .catch((err: { request: { status: number } }) => {
    check('“日志”信息获取失败，请刷新重试', err.request.status)
  })

// navigateData
export const navigateData = ref()
axios
  .get('/server/data/navigate')
  .then((res: { data: any }) => {
    navigateData.value = res.data
  })
  .catch((err: { request: { status: number } }) => {
    check('“导航栏”信息获取失败，请刷新重试', err.request.status)
  })

// demosData
export const demosData = ref()
axios
  .get('/server/data/demos')
  .then((res: { data: any }) => {
    demosData.value = res.data
  })
  .catch((err: { request: { status: any } }) => {
    check('“小项目”信息获取失败，请刷新重试', err.request.status)
  })
