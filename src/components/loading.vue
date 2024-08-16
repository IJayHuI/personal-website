<template>
	<div class="loader" :class="{ loaderBlock: loadingState }">
		<div class="circles" :class="{ circlesBlock: loadingState }">
			<div class="circle"></div>
			<p>{{ txt }}</p>
		</div>
		<div class="left" :class="{ openLeft: loadingState }"></div>
		<div class="right" :class="{ openRight: loadingState }"></div>
	</div>
	<div class="filter" :class="{ filterBlock: loadingState }"></div>
</template>
<script setup lang="ts">
	import { loadingState } from "../App.vue"
	import { ref } from "vue"
	const txt = ref("加载中...")
	setTimeout(() => {
		txt.value = "时间过长，要不刷新一下？"
	}, 5000)
</script>
<style scoped>
	p {
		margin-top: 30px;
		color: var(--fontColor);
		text-align: center;
		font-size: x-large;
	}
	.loader {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		z-index: 999;
		transition: z-index 0s 1.5s cubic-bezier(0.65, 0.05, 0.36, 1);
	}

	.loaderBlock {
		z-index: -999;
	}

	.left,
	.right {
		width: 50%;
		height: 100%;
		background-color: #444;
		transition: transform 1s 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
	}

	.openLeft {
		transform: translate(-100%);
	}

	.openRight {
		transform: translate(100%);
	}

	.circles {
		position: absolute;
		width: 400px;
		opacity: 1;
		z-index: 999;
		transition: opacity 0.5s;
	}

	.circlesBlock {
		opacity: 0;
	}

	.circle {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #fff;
		animation: spin 1.8s linear infinite;
		margin: auto;
	}

	.circle::before {
		content: "";
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #a4a4a4;
		animation: spin-reverse 0.6s linear infinite;
	}

	.circle::after {
		content: "";
		position: absolute;
		top: 15px;
		left: 15px;
		right: 15px;
		bottom: 15px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #d3d3d3;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes spin-reverse {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(-360deg);
		}
	}

	h2 {
		margin-top: 20px;
		text-align: center;
	}

	.filter {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 998;
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		transition: backdrop-filter 1s 0.5s, z-index 0s 1.5s;
	}

	.filterBlock {
		z-index: -999;
		backdrop-filter: blur(0px);
		-webkit-backdrop-filter: blur(0px);
	}
</style>
