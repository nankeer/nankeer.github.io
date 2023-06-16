<template>
  <div class="page">
    <h4>Permission By Dynamic Routes</h4>
    <div class="source">
      <pre class="mb-0">
// js
{{content}}
      </pre>
    </div>
  </div>
</template>

<script>
import permissionText from '@/texts/permission.txt'

export default {
  name: 'permission-index',
  data () {
    return {
      content: permissionText,
    }
  },
}
</script>

<style scoped>

</style>
