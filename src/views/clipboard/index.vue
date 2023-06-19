<template>
  <div class="page">
    <p class="paragraph">
      {{ content }}
      <el-tooltip content="Click to copy" placement="top">
        <button v-clipboard:success="successHandler" v-clipboard:error="errorHandler" v-clipboard="content" type="button" class="clipboard-button">
          <custom-icon name="clipboard"></custom-icon>
        </button>
      </el-tooltip>
    </p>
    <div class="source">
      <pre class="mb-0">{{clipboardText}}</pre>
    </div>
  </div>
</template>

<script>
import { Tooltip } from 'element-ui'
import Clipboard from '@/directives/clipboard'
import clipboardText from '@/directives/clipboard.txt'

export default {
  name: 'clipboard-index',
  components: {
    [Tooltip.name]: Tooltip,
  },
  directives: {
    clipboard: Clipboard
  },
  data () {
    return {
      clipboardText: clipboardText,
      content: 'PRs welcome, and issues as well! If you want any feature that we don’t have currently, please fire an issue for a feature request.'
    }
  },
  methods: {
    successHandler (e) {
      this.$message.success('Copy Successfully.')
    },
    errorHandler (e) {
      this.$message.error('Copy Unsuccessfully.')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.paragraph {
  font-size: 20px;
}

.clipboard-button {
  font-size: 1rem;
  border: none;
  background: transparent;
  transition: color .3s ease-in;
  @include hover() {
    color: $theme-color;
  }
}
</style>
