<template>
  <el-dialog
    width="800px" title="裁切图片"
    :visible.sync="visible" append-to-body
  >
    <div class="row">
      <div class="col-8">
        <div class="img-container">
          <img class="img-fluid origin-image" ref="image" :src="src" :alt="src">
        </div>
      </div>
      <div class="col-4">
        <div class="image-preview-1" ref="preview1" :style="{borderRadius: aspectRatio === 1 ? '50%' : '8px'}"></div>
        <div class="image-preview-2" ref="preview2" :style="{borderRadius: aspectRatio === 1 ? '50%' : '8px'}"></div>
      </div>
    </div>
    <div slot="footer" class="text-right">
      <el-button type="primary" @click="clickConfirm">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import CropperJS from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { Dialog, Button } from 'element-ui'

export default {
  name: 'cropper-modal',
  components: {
    [Dialog.name]: Dialog,
    [Button.name]: Button,
  },
  props: {
    aspectRatio: {
      type: Number,
      default: 1
    },
    outputWidth: {
      type: Number,
      default: 60
    },
    outputHeight: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      visible: false,
      src: '',
      cropper: null,
      callback: null,
    }
  },
  methods: {
    open (imgSrc, callback) {
      const vm = this
      const image = new Image()
      this.callback = callback
      image.onload = function () {
        vm.src = imgSrc
        vm.$nextTick(() => {
          vm.visible = true
          setTimeout(() => {
            vm.make()
          })
        })
      }
      image.src = imgSrc
    },
    make () {
      this.cropper = new CropperJS(this.$refs.image, {
        aspectRatio: this.aspectRatio,
        viewMode: 1,
        dragMode: 'move',
        preview: [this.$refs.preview1, this.$refs.preview2],
        autoCropArea: 0.6,
        cropBoxMovable: false,
        cropBoxResizable: false,
      })
    },
    clickConfirm () {
      if (this.cropper) {
        this.cropper.getCroppedCanvas({
          width: this.outputWidth,
          height: this.outputHeight
        }).toBlob(blob => {
          if (typeof this.callback === 'function') {
            this.visible = false
            this.callback(new File([blob], Date.now() + '.png', {
              type: 'image/png'
            }))
          }
        }, 'image/png')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.image-preview-1,
.image-preview-2 {
  overflow: hidden;
  box-shadow: $box-shadow;
  margin: 2em auto;
}
.image-preview-1 {
  width: 80px;
  height: 80px;
}
.image-preview-2 {
  width: 120px;
  height: 120px;
}
</style>
