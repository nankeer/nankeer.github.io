(self["webpackChunksnippets_admin"]=self["webpackChunksnippets_admin"]||[]).push([[93],{27093:function(r,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var t=function(){var r=this,n=r._self._c;return n("div",{staticClass:"page"},[n("h4",[r._v("Permission By Dynamic Routes")]),n("div",{staticClass:"source"},[n("pre",{staticClass:"mb-0"},[r._v("// js\n"+r._s(r.content)+"\n      ")])])])},s=[],o=e(30609),a=e.n(o),i={name:"permission-index",data(){return{content:a()}}},u=i,h=e(1001),p=(0,h.Z)(u,t,s,!1,null,"159839b1",null),c=p.exports},30609:function(r){r.exports="import NProgress from 'nprogress'\r\nimport 'nprogress/nprogress.css'\r\nimport router, { getFirstMenuPath } from '@/router'\r\nimport store from '@/store'\r\nimport { getToken } from '@/utils'\r\n\r\nconst whiteList = [\r\n  /^\\/login(?:\\/(?=$))?$/i,\r\n  /^\\/not-found(?:\\/(?=$))?$/i,\r\n  /^\\/redirect\\/((?:.*))(?:\\/(?=$))?$/i\r\n]\r\n\r\nfunction hasRoute (path) {\r\n  const routesConfig = router.getRoutes()\r\n  return routesConfig.some(v => v.regex.test(path))\r\n}\r\n\r\nfunction hasPath (routes, path) {\r\n  return routes.some((route) => {\r\n    if (route.children && route.children.length > 0) {\r\n      return hasPath(route.children, path)\r\n    }\r\n    return route.path === path\r\n  })\r\n}\r\n\r\nrouter.beforeEach((to, from, next) => {\r\n  const hasToken = !!getToken()\r\n  const {\r\n    meta,\r\n    path,\r\n    fullPath\r\n  } = to\r\n  if (meta && meta.title) {\r\n    document.title = meta.title\r\n  }\r\n  NProgress.start()\r\n  if (whiteList.some((v) => v.test(path))) {\r\n    next()\r\n    NProgress.done()\r\n  } else if (!hasToken) {\r\n    next({\r\n      replace: true,\r\n      name: 'Login',\r\n      query: {\r\n        returnUrl: fullPath\r\n      }\r\n    })\r\n  } else {\r\n    if (hasRoute(path)) {\r\n      next()\r\n    } else {\r\n      store.dispatch('user/generateRoutes', path).then((permissionRoutes) => {\r\n        if (\r\n          permissionRoutes.length === 0 ||\r\n          (!hasPath(permissionRoutes, path) && path !== '/')\r\n        ) {\r\n          // 1、当前路径在菜单中不存在\r\n          // 2、当前路径(根路径\"/\"除外)在菜单中存在，但是没有权限（角色没有勾选该菜单)\r\n          next({\r\n            name: 'NotFound',\r\n            replace: true\r\n          })\r\n        } else if (path === '/') {\r\n          const redirectPath = getFirstMenuPath(permissionRoutes[0])\r\n          console.log('redirectPath: ', redirectPath)\r\n\r\n          next({\r\n            path: redirectPath,\r\n            replace: true\r\n          })\r\n        } else {\r\n          permissionRoutes.forEach((route) => {\r\n            router.addRoute(route)\r\n          })\r\n          next({\r\n            ...to,\r\n            replace: true\r\n          })\r\n        }\r\n        NProgress.done()\r\n      }).catch(() => {\r\n        next({\r\n          name: 'NotFound',\r\n          replace: true\r\n        })\r\n      })\r\n\r\n      NProgress.done()\r\n    }\r\n  }\r\n})\r\n\r\nrouter.afterEach(() => {\r\n  NProgress.done()\r\n})\r\n"}}]);
//# sourceMappingURL=93.c556ebdb.js.map