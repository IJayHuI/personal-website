<script setup lang="ts">
	import { ref } from "vue"
	import background from "./components/background.vue"
	import loading from "./components/loading.vue"
	import { check } from "./main.ts"
	const deleteLoad = ref(true)
	window.onload = () => {
		loadingState.value = true
		setTimeout(() => {
			deleteLoad.value = false
		}, 2000)
		check("你好，欢迎来到我的网站", 200)
	}
</script>
<script lang="ts">
	export const loadingState = ref(false)
</script>

<template>
	<loading v-if="deleteLoad" />
	<background />
	<router-view> </router-view>
</template>
<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.3s ease-out;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
