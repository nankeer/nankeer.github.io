<template>
  <div class="page">
    <h4>Collapse</h4>
    <div class="demo">
      <button type="button" class="btn btn-primary" @click="show = !show">Toggle</button>
      <collapse-transition>
        <div v-show="show">
          <div class="mt-3 target"></div>
        </div>
      </collapse-transition>
    </div>
    <div class="source">
      <pre class="mb-0">
// css className
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
// js
import CollapseTransition from 'element-ui/<strong>lib</strong>/transitions/collapse-transition'
// element-ui/src/transitions/collapse-transition.js <strong>IT DOES NOT WORK!</strong>
export default {
  name: 'ElCollapseTransition',
  functional: true,
  render(h, { children }) {
    const data = {
      on: new Transition() // <strong>IT DOES NOT WORK!</strong> OwnProperty，NOT PrototypeMethod.
    };

    return h('transition', data, children);
  }
};
      </pre>
    </div>
  </div>
</template>

<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

export default {
  name: 'transitions-index',
  components: {
    CollapseTransition,
  },
  data () {
    return {
      show: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.demo {
  height: 200px;
}
.target {
  width: 100px;
  height: 100px;
  background-color: $gray-100;
}
</style>
