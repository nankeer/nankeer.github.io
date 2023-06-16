const { defineConfig } = require('@vue/cli-service')
const resolve = require('path').resolve
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = 'Snippets Admin'
        return args
      })
      .end()

    config.module.rule('txt')
      .test(/\.txt$/)
      .include.add(resolve('src/components'))
      .add(resolve('src/plugins'))
      .add(resolve('src/directives'))
      .end()
      .use('raw-loader')
      .loader('raw-loader')
      .options({
        esModule: false
      })
      .end()

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
  },
})
