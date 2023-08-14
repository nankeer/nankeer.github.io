import Layout from '@/layout'

export default {
  path: '/snippets',
  meta: {
    title: 'Snippets',
    icon: 'code-snippets'
  },
  component: Layout,
  redirect: '/snippets/permission',
  children: [
    {
      path: 'permission',
      meta: { title: 'Permission' },
      name: 'SnippetsPermission',
      component: () => import('@/views/permission/index')
    },
    {
      path: 'sudoku',
      meta: { title: 'Sudoku' },
      name: 'SnippetsSudoku',
      component: () => import('@/views/sudoku/index')
    },
    {
      path: 'two-columns',
      meta: { title: 'TwoColumns' },
      name: 'SnippetsTwoColumns',
      component: () => import('@/views/two-columns/index')
    },
    {
      path: 'three-columns',
      meta: { title: 'ThreeColumns' },
      name: 'SnippetsThreeColumns',
      component: () => import('@/views/three-columns/index')
    },
    {
      path: 'css-animations',
      meta: { title: 'CSSAnimations' },
      name: 'SnippetsCSSAnimations',
      component: () => import('@/views/css-animations/index')
    },
    {
      path: 'notification',
      meta: { title: 'Notification' },
      name: 'SnippetsNotification',
      component: () => import('@/views/notification/index')
    },
    {
      path: 'flip-your-animations',
      meta: { title: 'FlipYourAnimations' },
      name: 'SnippetsFlipYourAnimations',
      component: () => import('@/views/flip-your-animations/index')
    },
    {
      path: 'visibility-and-animation',
      meta: { title: 'VisibilityAnimation' },
      name: 'SnippetsVisibilityAndAnimation',
      component: () => import('@/views/visibility-and-animation/index')
    },
    {
      path: 'geo3d',
      meta: { title: 'Geo3D' },
      name: 'SnippetsGeo3D',
      component: () => import('@/views/geo3d/index')
    },
  ]
}
