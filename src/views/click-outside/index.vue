<template>
  <div class="page">
    <h4>ElementUI Click Outside</h4>
    <div class="position-relative" style="height: 12rem;">
      <button type="button" class="btn btn-primary" @click="visible1 = true">Click</button>
      <transition name="fade-in">
        <div v-if="visible1" class="mt-3 target" v-element-clickoutside="() => {visible1 = false}"></div>
      </transition>
    </div>
    <div class="source">
      <pre class="mb-0">
// js
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i &lt; len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};
      </pre>
    </div>
    <h4>Custom Click Outside</h4>
    <div class="position-relative" style="height: 12rem;">
      <button type="button" class="btn btn-primary" @click.stop="visible2 = true">Click</button>
      <transition name="fade-in">
        <div v-if="visible2" class="mt-3 target" v-clickoutside="() => {visible2 = false}"></div>
      </transition>
    </div>
    <div class="source">
      <pre class="mb-0">
// js
{{content}}
      </pre>
    </div>
  </div>
</template>

<script>
import ElementUIClickOutside from 'element-ui/src/utils/clickoutside'
import ClickOutside from '@/directives/click-outside'
import clickOutsideText from '@/directives/click-outside.txt'

export default {
  name: 'click-outside',
  directives: {
    'element-clickoutside': ElementUIClickOutside,
    clickoutside: ClickOutside,
  },
  data () {
    return {
      visible1: false,
      visible2: false,
      content: clickOutsideText,
    }
  },
  methods: {
    handler1 (evt) {
      console.log(evt)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.target {
  width: 5rem;
  height: 5rem;
  background-color: $gray-200;
}

.fade-in-enter {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-in-enter-active {
  transition: all .3s ease-in;
}
</style>
