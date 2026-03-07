<script setup lang="ts">
  import type { ThemeMode, BackgroundMode } from '../../stores'

  import homeTheme from '../../theme/home.json'

  import JayBackground from '../../containers/JayBackground.vue'
  import JayAvatar from '../../containers/JayAvatar.vue'
  import JayLog from '../../containers/JayLog.vue'
  import JayYiYan from '../../containers/JayYiYan.vue'
  import JayDatetime from '../../containers/JayDatetime.vue'
  import JaySite from '../../containers/JaySite.vue'
  import JayFooter from '../../containers/JayFooter.vue'
  import JayHeatmap from '../../containers/JayHeatmap.vue'
  import JayContactMe from '../../containers/JayContactMe.vue'

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
  <div :class="props.isLoading ? 'absolute w-full h-full overflow-hidden' : null">
    <jay-background />
    <n-config-provider v-if="!props.isMobile" :theme-overrides="props.isDark ? homeTheme.dark.desktop : homeTheme.light.desktop">
      <div class="max-w-7xl mx-auto w-full flex gap-4 px-4">
        <aside class="w-3xs sticky top-4 self-start flex flex-col gap-4">
          <jay-avatar />

          <n-card title="日志" class="interaction">
            <jay-log />
          </n-card>

          <n-card content-class="flex flex-col" class="interaction">
            <jay-footer />
          </n-card>
        </aside>

        <main class="flex-1 min-w-0 flex flex-col gap-4">
          <section class="min-h-screen flex flex-col justify-between relative">
            <div></div>

            <div class="flex items-center justify-between">
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
            <div class="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4">
              <jay-theme-change :set-theme-mode="props.setThemeMode" :theme-mode="props.themeMode" />

              <jay-background-change :set-background-mode="props.setBackgroundMode" :background-mode="props.backgroundMode" :random-background="props.randomBackground" />
            </div>

            <jay-heatmap />

            <div class="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4">
              <jay-introduction />

              <jay-background-introduction :background-src="props.backgroundSrc" />
            </div>
          </section>
        </main>
      </div>
    </n-config-provider>
    <n-config-provider v-else :theme-overrides="props.isDark ? homeTheme.dark.mobile : homeTheme.light.mobile"> </n-config-provider>
    <div id="show-background" class="h-screen invisible"></div>
  </div>
</template>
