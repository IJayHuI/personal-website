<script setup lang="ts">
  import loadingState from '../App.vue'
  import headIcon from '../components/Home/headIcon.vue'
  import contactMe from '../components/Home/contactMe.vue'
  import timeAndNavigate from '../components/Home/timeAndNavigate.vue'
</script>

<template>
  <div class="container beforeLoad" :class="{ load: loadingState }">
    <div class="element">
      <div class="size">
        <headIcon />
        <contactMe />
      </div>
      <div class="size"><timeAndNavigate /></div>
    </div>
    <div class="footer">
      <p>Copyright &copy; 2024 JayHu. 保留所有权利。<a href="https://beian.miit.gov.cn">浙ICP备2024102465号</a></p>
    </div>
  </div>
</template>

<style scoped>
  .element {
    width: var(--boxWidth);
    max-width: var(--maxWidth);
    margin: auto;
    display: flex;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--backColor);
    backdrop-filter: var(--backBlur);
    -webkit-backdrop-filter: var(--backBlur);
  }

  .footer * {
    color: var(--fontColor);
    text-align: center;
    text-decoration: none;
  }

  .footer a:hover {
    text-decoration: underline;
  }

  .size {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  /* 移动端视图 */
  @media screen and (max-width: 720px) {
    .element {
      height: 96%;
      flex-direction: column;
    }

    .footer {
      height: 4%;
    }

    .footer * {
      font-size: 12px;
    }

    .size {
      width: 100%;
      height: 50%;
    }
  }

  /* 桌面端视图 */
  @media screen and (min-width: 720px) {
    .element {
      height: 97%;
      flex-direction: row;
    }

    .footer {
      height: 3%;
    }

    .size {
      width: 50%;
      height: 100%;
    }
  }
</style>
