<script setup lang="ts">
	import { ref } from "vue"
	import axios from "axios"
	import { loadingState } from "../App.vue"
	import { check } from "../main.ts"
	var src = ref("")
	axios
		.get("/api/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN")
		.then((res) => {
			src.value = "https://cn.bing.com" + res.data.images[0].url
			check("当前正在使用 Bing 背景", res.status)
		})
		.catch((err) => {
			src.value = "public/backgroundImg/background" + Math.round(Math.random() * (10 - 1) + 1) + ".jpg"
			check("Bing 壁纸获取失败，使用站内背景替代", err.request.status)
		})
</script>

<template><img class="background beforeLoad" :class="{ load: loadingState }" :src="src" alt="背景图片" /></template>

<style scoped>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		z-index: -1;
		filter: brightness(0.85);
		-webkit-user-drag: none;
	}

	.load {
		transform: scale(1);
	}
</style>
