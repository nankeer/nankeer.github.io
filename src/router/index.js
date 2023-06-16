import Vue from 'vue'
import VueRouter from 'vue-router'
import snippetsRoute from '@/router/snippets'
import componentsRoute from '@/router/components'
import pluginsRoute from '@/router/plugins'
import directivesRoute from '@/router/directives'
import librariesRoute from '@/router/libraries'

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push (rawLocation) {
  return originPush.call(this, rawLocation).catch(() => {})
}
VueRouter.prototype.replace = function replace (rawLocation) {
  return originReplace.call(this, rawLocation).catch(() => {})
}
Vue.use(VueRouter)

const NotFound = {
  name: 'not-found',
  render (h) {
    return h('h1', { staticClass: 'm-3' }, '404 NotFound')
  }
}
const routes = [
  {
    path: '/',
    redirect: '/components'
  },
  snippetsRoute,
  componentsRoute,
  pluginsRoute,
  directivesRoute,
  librariesRoute,
  {
    path: '*',
    meta: { title: 'NotFound' },
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

function resolvePath (routes, base = '') {
  return routes.reduce((acc, v) => {
    const route = { ...v }
    route.path = /^\//.test(v.path) ? v.path : base + '/' + v.path
    if (route.children) {
      route.children = resolvePath(route.children, route.path)
    }
    acc.push(route)
    return acc
  }, [])
}
export const navs = resolvePath([snippetsRoute, componentsRoute, pluginsRoute, directivesRoute, librariesRoute])
export default router
