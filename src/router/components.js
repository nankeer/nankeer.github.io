import Layout from '@/layout'

export default {
  path: '/components',
  meta: { title: 'Components', icon: 'component' },
  component: Layout,
  redirect: '/components/element-icons',
  children: [
    {
      path: 'transitions',
      meta: { title: 'Transitions' },
      name: 'ComponentsTransitions',
      component: () => import('@/views/transitions/index')
    },
    {
      path: 'element-icons',
      meta: { title: 'ElIcons' },
      name: 'ComponentsElementIcons',
      component: () => import('@/views/element-icons/index')
    },
    {
      path: 'svg-icons',
      meta: { title: 'SvgIcons' },
      name: 'ComponentsSvgIcons',
      component: () => import('@/views/svg-icons/index')
    },
    {
      path: 'upload',
      meta: { title: 'Upload' },
      name: 'ComponentUpload',
      component: () => import('@/views/upload/index')
    },
  ]
}
