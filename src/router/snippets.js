import Layout from '@/layout'

export default {
  path: '/snippets',
  meta: { title: 'Snippets', icon: 'code-snippets' },
  component: Layout,
  redirect: '/snippets/sudoku',
  children: [
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
    }
  ]
}
