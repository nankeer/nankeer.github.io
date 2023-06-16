import Layout from '@/layout'

export default {
  path: '/libraries',
  meta: { title: 'Libraries', icon: 'cha-jian' },
  component: Layout,
  redirect: '/libraries/dayjs',
  children: [
    {
      path: 'dayjs',
      meta: { title: 'DayJS' },
      name: 'LibrariesDayJS',
      component: () => import('@/views/dayjs/index')
    }
  ],
}
