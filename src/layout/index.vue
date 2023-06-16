<template>
  <div class="d-flex flex-column min-vh-100 layout">
    <header class="py-1 bg-color sticky-top layout-header">
      <div class="d-flex flex-wrap align-items-center container-xl">
        <a href="javascript:void(0);" class="ml-n3 ml-sm-0 site-brand">
<!--          <img src="../assets/logo.svg" alt="logo">-->
          <nav-brand></nav-brand>
        </a>
        <button class="d-inline-flex d-sm-none align-items-center justify-content-center responsive-bars" type="button" @click="isOpened = !isOpened">
          <custom-icon name="bars"></custom-icon>
        </button>
        <ul class="list-unstyled my-0 ml-md-auto d-none d-sm-flex navs">
          <li
            class="d-sm-inline-flex flex-column align-items-center justify-content-center nav"
            v-for="item in navs" :key="item.path"
            :class="{active: isActive(item.path)}"
            @click="clickNavItem(item)"
          >
            <custom-icon class="nav-link-icon" :name="item.meta.icon"></custom-icon>
            <router-link class="nav-link" :to="item.redirect || item.path">{{item.meta.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="p-3 mobile-menus d-sm-none" :class="{'is-opened': isOpened}">
        <ul class="list-unstyled">
          <li v-for="nav in navs" :key="nav.path">
            <span class="mobile-menu">{{nav.meta.title}}{</span>
            <ul v-for="child in nav.children" :key="child.path">
              <li>
                <router-link :to="child.path" class="mobile-child-menu" @click.native="isOpened = false">{{child.meta.title}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
    <main class="layout-body">
      <div class="container-xl">
        <div class="row no-gutters">
          <div class="col-auto col-lg-2">
          <aside class="d-none d-sm-block menus-area">
            <ul class="list-unstyled menus">
              <li v-for="item in menus" :key="item.path">
                <router-link class="menu-link" :to="item.redirect || item.path">{{item.meta.title}}</router-link>
              </li>
            </ul>
          </aside>
          </div>
          <div class="col">
            <div class="page-area">
            <router-view></router-view>
          </div>
          </div>
        </div>
      </div>

      <el-backtop class="theme-color">
        <custom-icon name="el-icon-top"></custom-icon>
      </el-backtop>
    </main>
    <footer class="mt-auto text-center text-muted p-3 layout-footer">
      Copyright &copy; 2023 All Right Reserved.
    </footer>
  </div>
</template>

<script>
import { Backtop } from 'element-ui'
import { navs } from '@/router'
import NavBrand from '@/layout/nav-brand'

export default {
  name: 'app-index',
  components: {
    NavBrand,
    [Backtop.name]: Backtop,
  },
  data () {
    return {
      isOpened: false,
      navs: navs,
      menus: []
    }
  },
  mounted () {
    const currentPath = this.$route.path
    const navs = this.navs
    const index = navs.findIndex(v => currentPath.indexOf(v.path) > -1)
    if (index > -1) {
      this.menus = navs[index].children || []
    }
  },
  methods: {
    isActive (path) {
      const currentPath = this.$route.path
      return new RegExp(path).test(currentPath)
    },
    clickNavItem (item) {
      const navs = this.navs
      const routes = navs.reduce((acc, v) => {
        const route = { ...v }
        acc[route.path] = route
        return acc
      }, {})
      this.$router.push({ path: item.path })
      this.menus = routes[item.path].children || []
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

$brand-height: 80px;
.site-brand {
  display: inline-block;
  width: 160px;
  padding: 8px;
  height: $brand-height;
  img {
    width: 100%;
    height: 100%;
  }
}
.responsive-bars {
  border: none;
  font-size: 1.4rem;
  line-height: 1;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3px;
  margin-left: auto;
  color: $theme-color;
  background-color: lighten($theme-color, 45%);
  box-shadow: $box-shadow-sm;
  transition: all .3s ease-in;
  @include hover-focus-active () {
    box-shadow: none;
    background-color: $theme-color;
    color: white;
  }
}
.mobile-menus {
  max-height: 500px;
  box-shadow: $box-shadow;
  opacity: 0;
  overflow-y: auto;
  transform: translateY(-100%);
  background-color: $body-bg;
  position: fixed;
  left: 0;
  right: 0;
  top: calc($brand-height + 0.5rem);
  z-index: -1;
  transition: transform .3s ease-in;
  &.is-opened {
    z-index: 11;
    opacity: 1;
    transform: translateY(0);
  }
}
.layout-footer {
  background-color: darken($body-bg, 3%);
}
.nav {
  &.active {
    color: $theme-color;
  }
  @include hover-focus-active () {
    color: $theme-color;
  }
}
.nav-link {
  margin-top: .5rem;
  font-size: 1.2rem;
  padding: 0 .4em;
  text-transform: capitalize;
  text-decoration: none;
  line-height: 1;
  color: inherit;
  transition: all .3s ease-in;
  @include media-breakpoint-up('lg') {
    padding: 0 1em;
  }
}
.nav-link-icon {
  font-size: 24px;
  transition: all .3s ease-in;
}
.menus-area {
  padding: 1rem;
  position: sticky;
  top: calc($brand-height + 0.5rem);
}
.page-area {
  background-color: $body-bg;
}
.menu-link {
  text-transform: capitalize;
  display: block;
  line-height: 1.8em;
  text-align: right;
  color: $body-color;
  font-size: 1.4rem;
  text-decoration: none;
  transition: color .3s ease-in;
  @include hover () {
    color: $theme-color;
  }
}
</style>
