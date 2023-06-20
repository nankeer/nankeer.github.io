import Layout from '@/layout'

export default {
  path: '/libraries',
  meta: { title: 'Libraries', icon: 'cha-jian' },
  component: Layout,
  redirect: '/libraries/waypoints',
  children: [
    {
      path: 'waypoints',
      meta: { title: 'Waypoints' },
      name: 'LibrariesWaypoints',
      component: () => import('@/views/waypoints/index')
    },
    {
      path: 'dayjs',
      meta: { title: 'DayJS' },
      name: 'LibrariesDayJS',
      component: () => import('@/views/dayjs/index')
    },
    {
      path: 'isotope-layout',
      meta: { title: 'IsotopeLayout' },
      name: 'LibrariesIsotopeLayout',
      component: () => import('@/views/isotope-layout/index')
    },
    {
      path: 'images-loaded',
      meta: { title: 'ImagesLoaded' },
      name: 'LibrariesImagesLoaded',
      component: () => import('@/views/images-loaded/index')
    },
  ],
}
