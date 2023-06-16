<template>
  <div class="page">
    <div class="row no-gutters text-center">
      <div class="col-sm-4 col-md-3 col-lg-2" v-for="item in icons" :key="item">
        <div class="d-flex flex-column align-items-center justify-content-center px-3 py-4 demo-icon">
          <custom-icon class="icon" :name="item"></custom-icon>
          <div class="mt-2 icon-text">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="source">
      <pre class="mb-0">
config.module.rule('svg')
  .exclude.add(resolve('src/icons/svg'))
  .end()

config.module.rule('icons')
  .test(/\.svg$/)
  .include.add(resolve('src/icons/svg'))
  .end()
  .use('svg-sprite-loader')
  .loader('svg-sprite-loader')
  .options({
    symbolId: 'icon-[name]'
  })
  .end()
  .use('svgo-loader')
  .loader('svgo-loader')
  .options({
    plugins: [{
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'p-id', 't']
      }
    }]
  })
  .end()
      </pre>
      <hr>
      <pre class="mb-0">{{ content }}</pre>
    </div>
  </div>
</template>

<script>
import customIconText from '@/components/custom-icon/index.txt'

export default {
  name: 'svg-icons',
  data () {
    const icons = []
    const req = require.context('../../icons/svg', false, /\.svg$/)
    req.keys().forEach((fileName) => {
      const match = fileName.match(/\/(.*)\.svg$/)
      if (match && match[1]) {
        icons.push(match[1])
      }
    })
    return {
      icons: icons,
      content: customIconText,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.icon {
  font-size: 2rem;
}

.icon-text {
  color: inherit;
  font-family: 'Regencie', sans-serif;
}

.demo-icon {
  background: white;
  color: $gray-700;
  height: 140px;
  transition: background .3s, color .3s;
  @include hover() {
    background: darken($body-bg, 3%);
    color: $theme-color;
  }
}
</style>
