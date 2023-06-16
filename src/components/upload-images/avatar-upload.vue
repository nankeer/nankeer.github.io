<template>
  <el-upload
    ref="upload"
    class="avatar-upload"
    accept="image/*"
    :action="action"
    :auto-upload="autoUpload"
    :show-file-list="false"
    :multiple="false"
    :file-list="fileList"
    :before-upload="beforeUpload"
    :on-change="onChange"
    :on-success="handlerSuccess"
    :on-error="handlerError"
  >
    <div v-if="url" class="avatar-image">
      <img :src="url" :alt="urlName">
    </div>
    <div v-else class="d-flex align-items-center justify-content-center avatar-placeholder">
      <custom-icon name="el-icon-user-solid"></custom-icon>
    </div>
    <cropper-modal ref="modal" :aspect-ratio="aspectRatio" :output-height="outputHeight" :output-width="outputWidth"></cropper-modal>
  </el-upload>
</template>

<script>
import { Upload } from 'element-ui'
import CropperModal from '@/components/cropper-modal'

export default {
  name: 'avatar-upload',
  components: {
    [Upload.name]: Upload,
    CropperModal,
  },
  props: {
    action: {
      type: String,
      default: 'http://47.106.123.18/api/minio/upload'
    },
    autoUpload: {
      type: Boolean,
      default: false
    },
    // Notes: autoUpload为 true时无效
    needCropper: {
      type: Boolean,
      default: true,
    },
    fileList: {
      type: Array,
      default () {
        return []
      }
    },
    // Avatar Image MaxSize (10Mb default)
    maxSize: {
      type: Number,
      default: 1 * 1024 * 1024
    },
    onSuccess: Function,
    onError: Function,
    // Cropper Modal Output Image Size
    aspectRatio: Number,
    outputWidth: Number,
    outputHeight: Number,
  },
  data () {
    return {
      file: null,
      url: '',
      urlName: '',
    }
  },
  methods: {
    beforeUpload (rawFile) {
      const isImage = /image\/./.test(rawFile.type)
      const hasExceed = rawFile.size > this.maxSize
      if (!isImage) {
        this.$message.error('上传文件格式不对')
      }
      if (hasExceed) {
        this.$message.error('上传图片大小超过最大尺寸' + Math.ceil(this.maxSize / 1024 / 1024) + 'Mb')
      }
      if (isImage && !hasExceed) {
        return Promise.resolve({
          status: 'ready',
          name: rawFile.name,
          size: rawFile.size,
          percentage: 0,
          uid: rawFile.uid,
          raw: rawFile
        })
      }
      return Promise.reject(new Error('上传图片不合格'))
    },
    handlerSuccess (res, file, fileList) {
      if (typeof this.onSuccess === 'function') {
        this.onSuccess(res, file, fileList)
      }
    },
    handlerError (err, file, fileList) {
      if (typeof this.onError === 'function') {
        this.onError(err, file, fileList)
      }
    },
    onChange (file) {
      this.file = file
      // Make sure handler invoked on `handlerStart`.
      if (!this.autoUpload && file.status === 'ready') {
        const validate = (rawFile) => {
          this.beforeUpload(rawFile).then((data) => {
            this.$refs.upload.clearFiles()
            this.$refs.upload.uploadFiles.push(data)
            this.url = URL.createObjectURL(data.raw)
            this.urlName = ''
          }).catch(err => {
            console.error(err.message)
          })
        }
        if (this.needCropper) {
          this.makeCropper(file.raw).then(cropperRawFile => {
            validate(cropperRawFile)
          })
        } else {
          validate(file.raw)
        }
      }
    },
    makeCropper (rawFile) {
      return new Promise((resolve) => {
        if (URL) {
          this.$refs.modal.open(URL.createObjectURL(rawFile), resolve)
        }
      })
    },
    submit () {
      if (!this.autoUpload) {
        this.$refs.upload.submit()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

$avatar-width: 60px;
$avatar-height: $avatar-width;
.avatar-upload {
  width: $avatar-width;
  height: $avatar-height;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius: 50%;
  box-shadow: $box-shadow-sm;
  overflow: hidden;
  font-size: 2rem;
  .avatar-image,
  ::v-deep .el-upload {
    width: 100%;
    height: 100%;
  }
}
.avatar-placeholder {
  width: 100%;
  height: 100%;
  color: $gray-400;
}
.avatar-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
