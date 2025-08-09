import { NIcon } from 'naive-ui'
import { h } from 'vue'

const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
