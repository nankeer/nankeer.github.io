import Layout from '@/layout'

export default {
  path: '/directives',
  meta: { title: 'Directives', icon: 'zhi-ling' },
  component: Layout,
  redirect: '/directives/click-outside',
  children: [
    {
      path: 'click-outside',
      meta: { title: 'ClickOutside' },
      name: 'DirectivesClickOutside',
      component: () => import('@/views/click-outside/index')
    },
    {
      path: 'clipboard',
      meta: { title: 'Clipboard' },
      name: 'DirectivesClipboard',
      component: () => import('@/views/clipboard/index')
    },
    {
      path: 'lazy-load',
      meta: { title: 'LazyLoad' },
      name: 'DirectivesLazyLoad',
      component: () => import('@/views/lazy-load/index')
    },
    {
      path: 'draggable',
      meta: { title: 'Draggable' },
      name: 'DirectivesDraggable',
      component: () => import('@/views/draggable/index')
    },
    {
      path: 'water-marker',
      meta: { title: 'WaterMarker' },
      name: 'DirectivesWaterMarker',
      component: () => import('@/views/water-marker/index')
    },
  ]
}
