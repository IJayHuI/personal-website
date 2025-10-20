<script setup>
  import { onBeforeMount } from 'vue'
  import { supabase } from '@/main'
  import { yiYan } from '@/services/Home'

  onBeforeMount(async () => {
    if (!yiYan.value.needGetData) return
    const { data, error } = await supabase.functions.invoke('hitokoto')
    if (error) console.error(error)
    else {
      yiYan.value = data
      yiYan.value.needGetData = false
    }
  })
</script>
<template>
  <p class="text-xl">{{ yiYan.hitokoto }}</p>
  <p class="text-end">- {{ yiYan.from }}</p>
</template>
