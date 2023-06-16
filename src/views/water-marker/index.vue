<template>
  <div class="page">
    <h4>Canvas.toDataURL() As BackgroundImage</h4>
    <div class="demo mt-5" v-water-marker></div>
    <div class="source">
      <pre class="mb-0">
// js
{{content}}
      </pre>
    </div>
  </div>
</template>

<script>
import WaterMarker from '@/directives/water-marker'
import waterMarkerText from '@/directives/water-marker.txt'

export default {
  name: 'water-marker',
  directives: {
    'water-marker': WaterMarker,
  },
  data () {
    return {
      content: waterMarkerText,
    }
  },
}
</script>

<style scoped>
.demo {
  width: 100%;
  height: var(--water-marker-demo-height);
}
</style>
