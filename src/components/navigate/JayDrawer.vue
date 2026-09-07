<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useNavigateStore } from '../../stores'
import { copyLink } from '../../utils'

const navigate = useNavigateStore()
const message = useMessage()

withDefaults(defineProps<{ placement?: string; size?: string }>(), {
  placement: 'right',
  size: '40%'
})

const closeDrawer = () => {
  navigate.setContentDrawerStatus(false)
}

const handleCopyLink = async (link: string | undefined) => {
  try {
    const result = await copyLink(link)
    message.success(result)
  } catch (e) {
    message.error((e as Error).message)
  }
}
</script>

<template>
  <n-drawer
    :show="navigate.contentDrawerStatus"
    :width="size"
    :height="size"
    :placement="placement"
    @update:show="closeDrawer"
  >
    <n-drawer-content
      :title="navigate.drawerItem?.name"
      body-content-class="grid grid-cols-2 gap-4 !h-max"
    >
      <div>
        <p class="text-base font-bold">是否需要代理：</p>
        <p>{{ navigate.drawerItem?.needProxy ? '是' : '否' }}</p>
      </div>
      <div>
        <p class="text-base font-bold">类别：</p>
        <p>{{ navigate.drawerGroup?.name === null ? '暂无类别' : navigate.drawerGroup?.name }}</p>
      </div>
      <div class="col-span-2">
        <p class="text-base font-bold">链接：</p>
        <p>{{ navigate.drawerItem?.link === null ? '暂无链接' : navigate.drawerItem?.link }}</p>
      </div>
      <div class="col-span-2">
        <p class="text-base font-bold">简介：</p>
        <p>
          {{
            navigate.drawerItem?.introduction === null
              ? '暂无简介'
              : navigate.drawerItem?.introduction
          }}
        </p>
      </div>
      <template #footer>
        <n-space>
          <n-button secondary type="error" @click="closeDrawer()">关闭</n-button>
          <n-button secondary @click="handleCopyLink(navigate.drawerItem?.link)">拷贝链接</n-button>
          <n-button
            secondary
            tag="a"
            :href="navigate.drawerItem?.link"
            target="_blank"
            strong
            type="success"
            >前往</n-button
          >
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
