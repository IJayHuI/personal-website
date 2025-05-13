<script setup>
  import { ref, onMounted } from 'vue'
  import { screenWidth } from '../main'

  const contactInfos = ref([
    { id: '0', link: 'https://github.com/IJayHuI', icon: '../../public/contactMeIcon/github.svg', text: 'Github', mobileText: '去 GitHub 主页' },
    { id: '1', link: 'https://space.bilibili.com/474262477', icon: '../../public/contactMeIcon/bilibili.svg', text: '(゜-゜)つロ 干杯~-bilibili', mobileText: '去 Bilibili 主页' },
    { id: '2', link: 'mailto:2949763264@qq.com', icon: '../../public/contactMeIcon/mail.svg', text: '来封邮件', mobileText: '给我发邮件' },
    { id: '3', link: 'https://t.me/IJayHuI', icon: '../../public/contactMeIcon/telegram.svg', text: 'Oops!', mobileText: '去 Telegram' }
  ])
  const text = ref(screenWidth.value > 833 ? '' : '点击图标联系我')

  onMounted(() => {
    if (screenWidth.value > 833) {
      document.querySelectorAll('.link').forEach((element) => {
        element.addEventListener('mouseover', () => {
          text.value = contactInfos.value[Number(element.id)].text
        })
        element.addEventListener('mouseleave', () => {
          text.value = ''
        })
      })
    }
  })
  
  const mobileLink = ref('#')
  const mobileClick = (id) => {
    text.value = '点我' + contactInfos.value[Number(id)].mobileText
    mobileLink.value = contactInfos.value[Number(id)].link
  }
</script>
<template>
  <div class="contactBox" v-if="screenWidth > 833">
    <div class="icons">
      <template v-for="contactInfo in contactInfos">
        <a :id="contactInfo.id" class="link" :href="contactInfo.link"><img class="icon" :src="contactInfo.icon" alt="" /></a>
      </template>
    </div>
    <p class="text">{{ text }}</p>
  </div>
  <div class="contactBox" v-else>
    <div class="icons">
      <template v-for="contactInfo in contactInfos">
        <div @click="mobileClick(contactInfo.id)" class="link"><img class="icon" :src="contactInfo.icon" alt="" /></div>
      </template>
    </div>
    <a class="text" :href="mobileLink">{{ text }}</a>
  </div>
</template>
<style scoped>
  @media screen and (min-width: 834px) {
    .contactBox {
      height: 115px;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: var(--border-radius);
      transition: background-color var(--element-hover-transition-time);
    }

    .icons {
      height: 50px;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px;
      background-color: transparent;
    }

    .link {
      filter: brightness(1);
      transition: filter var(--element-hover-transition-time);
    }

    .contactBox:hover {
      color: var(--font-color);
      background-color: var(--background-color);
      backdrop-filter: blur(var(--blur));
      -webkit-backdrop-filter: blur(var(--blur));

      .link {
        filter: brightness(var(--icon-color));
      }
    }

    .text {
      height: 35px;
    }

    .icon {
      width: 36px;
      height: 36px;
    }
  }

  @media screen and (max-width: 833px) {
    .contactBox {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .icons {
      height: 50px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .icon {
      width: 30px;
      height: 30px;
      filter: brightness(var(--icon-color));
    }

    .text {
      color: var(--font-color);
      text-decoration: none;
    }
  }
</style>
