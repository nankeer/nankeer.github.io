<template>
  <div class="page">
    <div class="row">
      <div class="col-lg-9">
        <img class="img-fluid" ref="image" src="https://images.pexels.com/photos/16876978/pexels-photo-16876978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="https://images.pexels.com/photos/16876978/pexels-photo-16876978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load">
      </div>
      <div class="col-lg-3">
        <div class="mx-auto text-center">
          <div class="preview preview-1" ref="preview1"></div>
          <div class="preview preview-2" ref="preview2"></div>
        </div>
      </div>
    </div>
    <div class="source">
      <pre class="mb-0">
// https://github.com/fengyuanchen/cropperjs/blob/main/README.md
this.cropper = new CropperJS(image, {
  viewMode: 2,
  aspectRatio: 1,
  preview: previews,
  dragMode: 'move',
  autoCropArea: 0.5,
})
      </pre>
    </div>
  </div>
</template>

<script>
import CropperJS from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'cropperjs-index',
  data () {
    return {
      cropper: null
    }
  },
  mounted () {
    const image = this.$refs.image
    const previews = [this.$refs.preview1, this.$refs.preview2]
    this.cropper = new CropperJS(image, {
      viewMode: 2,
      aspectRatio: 1,
      preview: previews,
      dragMode: 'move',
      autoCropArea: 0.5,
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.preview {
  margin: 3rem auto;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: $box-shadow;
}
.preview-1 {
  width: 100px;
  height: 100px;
}
.preview-2 {
  width: 150px;
  height: 150px;
}
</style>
