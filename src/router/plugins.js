import Layout from '@/layout'

export default {
  path: '/plugins',
  meta: { title: 'Plugins', icon: 'plugin' },
  component: Layout,
  redirect: '/plugins/cropperjs',
  children: [
    {
      path: 'cropperjs',
      meta: { title: 'CropperJS' },
      name: 'PluginsCropperJS',
      component: () => import('@/views/cropperjs/index')
    },
  ]
}
