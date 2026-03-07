<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isMobile: boolean
      contactList: {
        link: string
        icon: string
        text: string
        mobileText: string
      }[]
    }>(),
    {
      isMobile: false,
      contactList: () => []
    }
  )

  const icons = import.meta.glob('/src/assets/contact-me/*.svg', {
    eager: true,
    import: 'default'
  })

  const renderIcon = (path: string) => {
    return icons[`/src/assets${path}`]
  }
</script>
<template>
  <div v-if="!isMobile" class="flex gap-2">
    <n-button tag="a" :href="item.link" target="_blank" class="overflow-hidden !transition-[max-width] !duration-600 !max-w-19.75 hover:!max-w-xl !ease-in-out" size="large" round v-for="item in props.contactList" secondary>
      <div class="flex items-center gap-6">
        <n-icon size="35">
          <component :is="renderIcon(item.icon)" />
        </n-icon>
        <p>
          {{ item.text }}
        </p>
      </div>
    </n-button>
  </div>
</template>
