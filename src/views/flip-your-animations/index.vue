<template>
  <div class="page">
    <h4>Animations</h4>
    <div class="demo">
      <div class="button-group">
        <button type="button" class="btn btn-primary" @click="insert">Insert</button>
        <button type="button" class="btn btn-danger" @click="reset">Reset</button>
        <button type="button" class="btn btn-info" @click="shuffle">Shuffle</button>
        <transition-group name="fade-list" tag="ul" class="list-unstyled position-relative">
          <li class="p-3 d-flex align-items-center" v-for="item in items" :key="item">
            <span class="list-text">{{item}}</span>
            <custom-icon name="close" class="ml-auto" @click="remove(item)"></custom-icon>
          </li>
        </transition-group>
      </div>
    </div>
    <div class="source">
      <p>&lt;ransition-group&gt; 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 v-move class，它会在元素的改变定位的过程中应用</p>
      <pre class="mb-0">
// css
<strong>.fade-list-move</strong>,
.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-list-enter,
.fade-list-leave-to {
  opacity: 0;
  transform: scaleY(.01) translate(50px, 0);
}
.fade-list-leave-active {
  position: absolute;
}
      </pre>
    </div>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
const items = [1, 2, 3, 4]
let id = items.length

export default {
  name: 'flip-your-animations',
  data () {
    return {
      items: [...items]
    }
  },
  methods: {
    insert () {
      const length = this.items.length
      const index = Math.round(Math.random() * length)
      this.items.splice(index, 0, ++id)
    },
    reset () {
      this.items = [...items]
    },
    shuffle () {
      this.items = [...shuffle(this.items)]
    },
    remove (item) {
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.button-group {
  .btn {
    margin-left: 10px;
    margin-bottom: 16px;
    &:first-child {
      margin-left: 0;
    }
  }
}
.demo li {
  width: 100%;
  height: 40px;
  background-color: darken($body-bg, 3%);
  border-top: 1px solid $border-color;
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;
  box-sizing: border-box;
  &:last-child {
    border-bottom: 1px solid $border-color;
  }
}
.fade-list-move,
.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-list-enter,
.fade-list-leave-to {
  opacity: 0;
  transform: scaleY(.01) translate(50px, 0);
}
.fade-list-leave-active {
  position: absolute;
}
</style>
