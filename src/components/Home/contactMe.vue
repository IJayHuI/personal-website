<template>
  <div class="contact">
    <div class="icon">
      <a @touchstart="" class="link" href="https://t.me/IJayHuI" target="_blank">
        <img src="../../../public/contactMeIcon/telegram.svg" alt="" />
      </a>
      <a @touchstart="" class="link" href="mailto:2949763264@qq.com" target="_blank">
        <img src="../../../public/contactMeIcon/mail.svg" alt="" />
      </a>
      <a @touchstart="" class="link" href="https://space.bilibili.com/474262477" target="_blank">
        <img src="../../../public/contactMeIcon/bilibili.svg" alt="" />
      </a>
      <a @touchstart="" class="link" href="https://github.com/IJayHuI" target="_blank">
        <img src="../../../public/contactMeIcon/github.svg" alt="" />
      </a>
    </div>
    <div class="content">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  let texts = ['Oops!', '来封邮件', '(゜-゜)つロ 干杯~-bilibili', 'GitHub']
  let text = ref('点击图标联系我')
  onMounted(() => {
    const links = document.querySelectorAll('.link')
    const contact = document.querySelector('.contact')
    const content = document.querySelector('.content')
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseover', () => {
        contact.classList.add('linkHoverContactStyle')
        content.style.opacity = 1
        text.value = texts[i]
      })
      links[i].addEventListener('mouseleave', () => {
        contact.classList.remove('linkHoverContactStyle')
        content.style.opacity = 0
        text.value = '点击图标联系我'
      })
    }
    contact.addEventListener('mouseover', () => {
      content.style.opacity = 1
      contact.classList.add('linkHoverContactStyle')
    })
    contact.addEventListener('mouseleave', () => {
      content.style.opacity = 0
      contact.classList.remove('linkHoverContactStyle')
    })
  })
</script>

<style scoped>
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: var(--borderRadius);
    background-color: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    transition: background-color 0.18s, backdrop-filter 0.18s, height 0.18s;
  }

  .icon {
    height: 55px;
    display: flex;
    align-items: center;
  }

  .link {
    padding: 10px;
    transition: transform 0.18s;
  }

  img {
    width: 35px;
    height: 35px;
  }

  .content {
    opacity: 0;
    padding: 10px;
    height: 38px;
    font-size: 18px;
    color: var(--fontColor);
    transition: opacity 0.18s;
  }

  /* 移动端视图 */
  @media screen and (max-width: 720px) {
    .contact {
      justify-content: center;
    }
    .content {
      display: none;
    }

    .link:active {
      transform: scale(0.8);
    }
  }

  /* 桌面端视图 */
  @media screen and (min-width: 720px) {
    .linkHoverContactStyle {
      background-color: var(--backColor);
      backdrop-filter: var(--backBlur);
      -webkit-backdrop-filter: var(--backBlur);
    }

    .link:hover {
      transform: scale(1.1);
    }

    .link:active {
      transform: scale(1);
    }
  }
</style>
