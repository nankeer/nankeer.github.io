<template>
  <div class="page">
    <div class="row">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="(item, index) in animations" :key="item">
        <div class="py-3 d-flex flex-column justify-content-center align-items-center">
          <div class="demo">
            <transition
              :enter-active-class="'animate__animated animate__' + item"
            >
              <div v-if="showStatus[index]" class="target"></div>
            </transition>
          </div>
          <button type="button" class="mt-3 btn btn-primary css-animations-button" @click="handlerClick(item, index)">{{item}}</button>
        </div>
      </div>
    </div>
    <div class="source">
      <pre class="mb-0">
// index.html
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/<strong>4.1.1</strong>/animate.min.css"/&gt;
// vue
&lt;transition enter-active-class="animate__animated animate__bounce"&gt;
  &lt;div v-if="show"&gt;&lt;/div&gt;
&lt;/transition&gt;
      </pre>
    </div>
  </div>
</template>

<script>
const animations = [
  'bounce',
  'flash',
  'pulse',
  'rubberBand',
  'shakeX',
  'shakeY',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
  'heartBeat',
  'backInDown',
  'backInLeft',
  'backInRight',
  'backInUp',
  'backOutDown',
  'backOutLeft',
  'backOutRight',
  'backOutUp',
  'bounceIn',
  'bounceInDown',
  'bounceInLeft',
  'bounceInRight',
  'bounceInUp',
  'bounceOut',
  'bounceOutDown',
  'bounceOutLeft',
  'bounceOutRight',
  'bounceOutUp',
  'fadeIn',
  'fadeInDown',
  'fadeInDownBig',
  'fadeInLeft',
  'fadeInLeftBig',
  'fadeInRight',
  'fadeInRightBig',
  'fadeInUp',
  'fadeInUpBig',
  'fadeInTopLeft',
  'fadeInTopRight',
  'fadeInBottomLeft',
  'fadeInBottomRight',
  'fadeOut',
  'fadeOutDown',
  'fadeOutDownBig',
  'fadeOutLeft',
  'fadeOutLeftBig',
  'fadeOutRight',
  'fadeOutRightBig',
  'fadeOutUp',
  'fadeOutUpBig',
  'fadeOutTopLeft',
  'fadeOutTopRight',
  'fadeOutBottomRight',
  'fadeOutBottomLeft',
  'flip',
  'flipInX',
  'flipInY',
  'flipOutX',
  'flipOutY',
  'lightSpeedInRight',
  'lightSpeedInLeft',
  'lightSpeedOutRight',
  'lightSpeedOutLeft',
  'rotateIn',
  'rotateInDownLeft',
  'rotateInDownRight',
  'rotateInUpLeft',
  'rotateInUpRight',
  'rotateOut',
  'rotateOutDownLeft',
  'rotateOutDownRight',
  'rotateOutUpLeft',
  'rotateOutUpRight',
  'hinge',
  'jackInTheBox',
  'rollIn',
  'rollOut',
  'zoomIn',
  'zoomInDown',
  'zoomInLeft',
  'zoomInRight',
  'zoomInUp',
  'zoomOut',
  'zoomOutDown',
  'zoomOutLeft',
  'zoomOutRight',
  'zoomOutUp',
  'slideInDown',
  'slideInLeft',
  'slideInRight',
  'slideInUp',
  'slideOutDown',
  'slideOutLeft',
  'slideOutRight',
  'slideOutUp'
]

export default {
  name: 'css-animations',
  data () {
    return {
      animations: animations,
      showStatus: Array(animations.length).fill(false),
    }
  },
  methods: {
    handlerClick (item, index) {
      this.showStatus.splice(index, 1, !this.showStatus[index])
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.demo {
  width: 50px;
  height: 50px;
  overflow: hidden;
}
.target {
  width: 100%;
  height: 100%;
  background-color: $gray-300;
}
.css-animations-button {
  font-family: Arial sans-serif;
  font-size: .8rem;
}
</style>
