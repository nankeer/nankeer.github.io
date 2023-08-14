<template>
  <div class="page">
    <h4>Visibility & Animation</h4>
    <div class="demo">
      <div ref="target" class="target"></div>
      <button type="button" class="mt-3 btn btn-primary" @click="animate">Animate</button>
    </div>
    <div class="source mt-3">
      <pre>
 init () {
   const target = this.$refs.target
   target.style.cssText = `
     <strong>visibility: hidden;</strong>
     <strong>animation-name: none;</strong>
   `
 },
 animate () {
  const target = this.$refs.target
   target.style.cssText = `
     visibility: visible;
     animation-name: ${this.animationName};
     animation-duration: 1s;
   `
 }
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'visibility-and-animation',
  data () {
    return {
      animationName: 'fadeInDown'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const target = this.$refs.target
      target.style.cssText = `
        visibility: hidden;
        animation-name: none;
      `
    },
    animate () {
      const target = this.$refs.target
      target.style.cssText = `
        visibility: visible;
        animation-name: ${this.animationName};
        animation-duration: 1s;
      `
    }
  },
}
</script>

<style lang="scss" scoped>
  .target {
    background-color: lightgray;
    width: 100px;
    height: 100px;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
