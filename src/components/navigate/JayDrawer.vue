<script setup lang="ts">
  import type { NavigateGroup, NavigateItem } from '../../stores'

  const props = withDefaults(
    defineProps<{
      status?: boolean
      group?: NavigateGroup
      item?: NavigateItem
      placement: string
      size: string
      closeDrawer: () => void
      copyLink: (link: string | undefined) => void
    }>(),
    {
      status: false,
      placement: 'right',
      size: '40%',
      closeDrawer: () => {},
      copyLink: () => {}
    }
  )
</script>
<template>
  <n-drawer :show="props.status" :width="props.size" :height="props.size" :placement="props.placement" @update:show="closeDrawer">
    <n-drawer-content :title="props.item?.name" body-content-class="grid grid-cols-2 gap-4 !h-max">
      <div>
        <p class="text-base font-bold">是否需要代理：</p>
        <p>{{ props.item?.needProxy ? '是' : '否' }}</p>
      </div>
      <div>
        <p class="text-base font-bold">类别：</p>
        <p>{{ props.group?.name === null ? '暂无类别' : props.group?.name }}</p>
      </div>
      <div class="col-span-2">
        <p class="text-base font-bold">链接：</p>
        <p>{{ props.item?.link === null ? '暂无链接' : props.item?.link }}</p>
      </div>
      <div class="col-span-2">
        <p class="text-base font-bold">简介：</p>
        <p>{{ props.item?.introduction === null ? '暂无简介' : props.item?.introduction }}</p>
      </div>
      <template #footer>
        <n-space>
          <n-button secondary type="error" @click="closeDrawer()">关闭</n-button>
          <n-button secondary @click="copyLink(props.item?.link)">拷贝链接</n-button>
          <n-button secondary tag="a" :href="props.item?.link" target="_blank" strong type="success">前往</n-button>
        </n-space>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
