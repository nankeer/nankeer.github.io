<template>
  <div class="page">
    <h4>Draggable(Relative to the viewport)</h4>
    <div class="draggable-area">
      <div class="box" v-draggable.sticky></div>
    </div>
    <div class="source">
      <pre class="mb-0">
// template
&lt;div class="box" v-draggable.sticky&gt;&lt;/div&gt;
===============================================================
// js
{{content}}
      </pre>
    </div>
    <h4 class="mt-5">Parent Boundary</h4>
    <div class="border draggable-area" ref="boundary">
      <div class="box" v-draggable.sticky="handlerDrag"></div>
    </div>
    <div class="source">
      <pre class="mb-0">
 // template
&lt;div class="box" v-draggable.sticky="handlerDrag"&gt;&lt;/div&gt;
===============================================================
// script
methods: {
  handlerDrag (config) {
    const parent = this.$refs.boundary
    const { x, y, width, height } = parent.getBoundingClientRect()
    const target = config.target

    const left = config.x - x
    const top = config.y - y
    parent.style.position = 'relative'
    target.style.cssText = `
      position: absolute;
      left: ${left}px;
      top: ${top}px;
      width: ${config.rect.width}px;
      height: ${config.rect.height}px;
    `
    const m = width - config.rect.width
    const n = height - config.rect.height

    target.style.left = (Math.min(Math.max(left, 0), m)) + 'px'
    target.style.top = (Math.min(Math.max(top, 0), n)) + 'px'
  },
},
      </pre>
    </div>
  </div>
</template>

<script>
import Draggable from '@/directives/draggable'
import draggableText from '@/directives/draggable.txt'

export default {
  name: 'draggable-index',
  directives: {
    draggable: Draggable,
  },
  data () {
    return {
      content: draggableText,
    }
  },
  methods: {
    handlerDrag (config) {
      const parent = this.$refs.boundary
      const { x, y, width, height } = parent.getBoundingClientRect()
      const target = config.target

      const left = config.x - x
      const top = config.y - y
      parent.style.position = 'relative'
      target.style.cssText = `
        position: absolute;
        left: ${left}px;
        top: ${top}px;
        width: ${config.rect.width}px;
        height: ${config.rect.height}px;
      `
      const m = width - config.rect.width
      const n = height - config.rect.height

      target.style.left = (Math.min(Math.max(left, 0), m)) + 'px'
      target.style.top = (Math.min(Math.max(top, 0), n)) + 'px'
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.box {
  width: 60px;
  height: 60px;
  background-color: $gray-200;
  //position: fixed;
  //left: 50%;
  //top: 20%;
}
.draggable-area {
  height: var(--draggable-height);
}
</style>
