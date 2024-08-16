<script setup lang="ts">
	import { ref, onMounted } from "vue"
	const headIcon = ref("/public/headIcon/icon1.png")
	const headBackground = ref()
	const changeHeadImg = () => {
		headIcon.value = "/public/headIcon/icon" + Math.round(Math.random() * (6 - 1) + 1) + ".png"
		headBackground.value.style.backgroundImage = "url(/public/headIcon/background" + Math.round(Math.random() * (4 - 1) + 1) + ".jpg)"
		return headIcon.value
	}
	onMounted(() => {
		headBackground.value = document.querySelector(".headBackground")
	})
</script>

<template>
	<div class="headBackground">
		<img class="head" v-on:click="changeHeadImg" :src="headIcon" alt="" @touchstart="" @touchend="" />
	</div>
</template>

<style scoped>
	.headBackground {
		width: 65%;
		border-radius: 50%;
		transition: transform 0.3s, background-image 0.3s, box-shadow 0.3s;
		-webkit-transition: transform 0.3s, background-image 0.3s, box-shadow 0.3s;
		-moz-transition: transform 0.3s, background-image 0.3s, box-shadow 0.3s;
		cursor: pointer;
		background-image: url(/public/headIcon/background1.jpg);
	}

	.headBackground:active {
		box-shadow: 0 0 20px white;
	}

	.head {
		width: 100%;
		height: 100%;
		user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-webkit-touch-callout: none;
	}

	/* 移动端视图 */
	@media screen and (max-width: 720px) {
		.headBackground:active {
			transform: scale(0.95);
		}
	}

	/* 桌面端视图 */
	@media screen and (min-width: 720px) {
		.headBackground:hover {
			transform: scale(1.05);
		}

		.headBackground:active {
			transform: scale(1);
		}
	}
</style>
