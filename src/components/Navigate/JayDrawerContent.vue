<script setup>
  import { drawer, copyLink } from '@/services/Navigate'
  import { useMessage } from 'naive-ui'

  const message = useMessage()
  const handleCopyLink = () => {
    copyLink(message)
      .then((response) => {
        message.success(response)
      })
      .catch((error) => {
        message.error(error)
      })
  }
</script>
<template>
  <n-drawer-content :title="drawer.datas.title" body-content-class="grid grid-cols-2 gap-4 !h-max">
    <div>
      <p class="text-base font-bold">是否需要代理：</p>
      <p>{{ drawer.datas.needProxy ? '是' : '否' }}</p>
    </div>
    <div>
      <p class="text-base font-bold">类别：</p>
      <p>{{ drawer.datas.category == null ? '暂无类别' : drawer.datas.category }}</p>
    </div>
    <div class="col-span-2">
      <p class="text-base font-bold">链接：</p>
      <p>{{ drawer.datas.link == null ? '暂无链接' : drawer.datas.link }}</p>
    </div>
    <div class="col-span-2">
      <p class="text-base font-bold">简介：</p>
      <p>{{ drawer.datas.content == null ? '暂无简介' : drawer.datas.content }}</p>
    </div>
    <template #footer>
      <n-space>
        <n-button secondary @click="drawer.status = false">关闭</n-button>
        <n-button secondary @click="handleCopyLink()">复制链接</n-button>
        <n-button secondary tag="a" :href="drawer.datas.link" target="_blank" strong type="success">前往</n-button>
      </n-space>
    </template>
  </n-drawer-content>
</template>
