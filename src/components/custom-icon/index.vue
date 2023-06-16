<template>
  <span class="custom-icon" v-on="$listeners">
    <i v-if="isElementIcon" :class="iconClass"></i>
    <svg v-else>
      <use :xlink:href="iconClass"></use>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'custom-icon',
  props: {
    name: String
  },
  computed: {
    isElementIcon () {
      return /^el-icon-/.test(this.name)
    },
    iconClass () {
      return this.isElementIcon ? this.name : '#icon-' + this.name
    },
  },
}
</script>

<style scoped>
.custom-icon {
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.custom-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
