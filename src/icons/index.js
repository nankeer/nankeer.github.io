import CustomIcon from '@/components/custom-icon'
import { Icon } from 'element-ui'

export default function install (Vue) {
  const icons = require.context('./svg', false, /\.svg$/)
  icons.keys().forEach(icons)
  Vue.use(Icon)
  Vue.component('custom-icon', CustomIcon)
}
