<template>
  <div class="top">
    <div class="topBox">
      <router-link class="link" :to="{ path: '/' }">主页</router-link>
      <router-link class="link" :to="{ path: '/navigates' }">导航</router-link>
      <router-link class="link" :to="{ path: '/demos' }">小项目</router-link>
      <router-link class="link" :to="{ path: '/logs' }">日志</router-link>
      <router-link class="link" :to="{ path: '/about' }">关于</router-link>
    </div>
  </div>
</template>

<style scoped>
  .top {
    position: fixed;
    width: 100%;
    height: 45px;
    background-color: var(--backColor);
    backdrop-filter: var(--backBlur);
    -webkit-backdrop-filter: var(--backBlur);
    z-index: 99;
  }

  .topBox {
    width: var(--boxWidth);
    max-width: var(--maxWidth);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    font-size: var(--fontSize);
  }

  .link {
    color: var(--fontColor);
    text-decoration: none;
    user-select: none;
  }

  .link:first-child {
    padding-left: 22px;
  }

  .link:last-child {
    padding-right: 22px;
  }
</style>
