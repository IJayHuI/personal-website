<script setup lang="ts">
  import type { ThemeMode, BackgroundMode } from '../../stores'

  import homeTheme from '../../theme/home.json'

  import JayBackground from '../../containers/home/JayBackground.vue'
  import JayAvatar from '../../containers/home/JayAvatar.vue'
  import JayLog from '../../containers/home/JayLog.vue'
  import JayYiYan from '../../containers/home/JayYiYan.vue'
  import JayDatetime from '../../containers/home/JayDatetime.vue'
  import JaySite from '../../containers/home/JaySite.vue'
  import JayFooter from '../../containers/JayFooter.vue'
  import JayHeatmap from '../../containers/home/JayHeatmap.vue'
  import JayContactMe from '../../containers/home/JayContactMe.vue'
  import JayTechList from '../../containers/home/JayTechList.vue'

  import JayThemeChange from './JayThemeChange.vue'
  import JayBackgroundChange from './JayBackgroundChange.vue'
  import JayScrollTip from './JayScrollTip.vue'
  import JayIntroduction from './JayIntroduction.vue'
  import JayBackgroundIntroduction from './JayBackgroundIntroduction.vue'

  const props = withDefaults(
    defineProps<{
      isDark?: boolean
      isMobile?: boolean
      isLoading?: boolean
      themeMode?: ThemeMode
      backgroundMode?: BackgroundMode
      backgroundSrc?: string
      setThemeMode?: (mode: ThemeMode) => void
      setBackgroundMode?: (mode: BackgroundMode) => void
      randomBackground?: () => void
    }>(),
    {
      isDark: false,
      isMobile: false,
      isLoading: false,
      themeMode: 'system',
      backgroundMode: 'bing',
      backgroundSrc: '',
      setThemeMode: () => {},
      setBackgroundMode: () => {},
      randomBackground: () => {}
    }
  )
</script>
<template>
  <div :class="props.isLoading ? 'overflow-hidden' : null">
    <jay-background />
    <n-config-provider v-if="!props.isMobile" :theme-overrides="props.isDark ? homeTheme.dark.desktop : homeTheme.light.desktop">
      <div class="max-w-7xl mx-auto w-full flex gap-4 px-4">
        <aside class="w-3xs sticky top-4 self-start flex flex-col gap-4">
          <jay-avatar />

          <n-card title="简介" class="interaction" size="small" @touchstart="">
            <jay-introduction />
          </n-card>

          <n-card size="small" v-slide-in class="interaction" title="技术栈" @touchstart="" content-class="flex flex-row flex-wrap gap-2">
            <jay-tech-list />
          </n-card>

          <n-card content-class="flex flex-col" class="interaction">
            <jay-footer />
          </n-card>
        </aside>

        <main class="flex-1 min-w-0 flex flex-col gap-4">
          <section class="min-h-screen flex flex-col justify-between relative">
            <div></div>

            <div class="flex items-center justify-between text-white">
              <div class="flex-1 flex flex-col gap-2">
                <div class="w-2/3">
                  <jay-yi-yan />
                </div>

                <jay-contact-me />
              </div>

              <div>
                <jay-datetime date-text-align="text-right" time-text-align="text-right" />
              </div>
            </div>

            <div>
              <jay-site />

              <jay-scroll-tip />
            </div>
          </section>

          <section class="flex flex-col gap-4">
            <jay-heatmap v-slide-in />

            <n-card title="日志" class="interaction" v-slide-in>
              <jay-log />
            </n-card>

            <div class="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4">
              <jay-background-introduction v-slide-in :background-src="props.backgroundSrc" />

              <div class="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4">
                <jay-theme-change v-slide-in :set-theme-mode="props.setThemeMode" :theme-mode="props.themeMode" />

                <jay-background-change v-slide-in :set-background-mode="props.setBackgroundMode" :background-mode="props.backgroundMode" :random-background="props.randomBackground" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </n-config-provider>
    <n-config-provider v-else :theme-overrides="props.isDark ? homeTheme.dark.mobile : homeTheme.light.mobile">
      <main class="flex flex-col gap-2 p-2">
        <section class="w-full h-[calc(100dvh-53px)] flex flex-col justify-between">
          <div class="w-2/3 mx-auto">
            <jay-avatar />
          </div>

          <div class="flex flex-col gap-1 text-white">
            <div class="flex flex-row justify-between items-center">
              <jay-datetime date-text-size="text-lg" time-text-size="text-4xl" />
            </div>

            <div>
              <jay-yi-yan hitokoto-size="text-base" from-size="text-sm" />
            </div>

            <jay-contact-me />
          </div>

          <div>
            <jay-site card-size="small" :icon-size="30" direction="col" text-class="text-base" item-size="100px" />

            <jay-scroll-tip :size="28" />
          </div>
        </section>

        <section class="flex flex-col gap-2">
          <jay-heatmap v-slide-in />

          <n-card title="日志" class="interaction" v-slide-in>
            <jay-log />
          </n-card>
          <n-card title="简介" class="interaction" v-slide-in>
            <jay-introduction />
          </n-card>
          <jay-background-introduction v-slide-in :background-src="props.backgroundSrc" />

          <n-card v-slide-in class="interaction" title="技术栈" @touchstart="" content-class="flex flex-row flex-wrap gap-2">
            <jay-tech-list />
          </n-card>

          <jay-theme-change v-slide-in :set-theme-mode="props.setThemeMode" :theme-mode="props.themeMode" />

          <jay-background-change v-slide-in :set-background-mode="props.setBackgroundMode" :background-mode="props.backgroundMode" :random-background="props.randomBackground" />
        </section>

        <n-card size="small" class="!sticky bottom-0" content-class="flex flex-row justify-center gap-1 text-xs">
          <jay-footer />
        </n-card>
      </main>
    </n-config-provider>
    <div id="show-background" class="h-screen invisible"></div>
  </div>
</template>
