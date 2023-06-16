<template>
  <div class="page">
    <h4>Avatar Upload</h4>
    <div class="demo">
      <div class="row">
        <div class="col-auto">
          <avatar-upload class="avatar-1"></avatar-upload>
        </div>
        <div class="col-auto">
          <avatar-upload class="avatar-2" :output-width="100" :output-height="100"></avatar-upload>
        </div>
        <div class="col-auto">
          <avatar-upload class="avatar-3" :output-width="150" :output-height="150"></avatar-upload>
        </div>
        <div class="col-auto">
          <avatar-upload class="avatar-4" :aspect-ratio="150 / 200" :output-width="150" :output-height="200"></avatar-upload>
        </div>
      </div>
    </div>
    <div class="source">
      <pre class="mb-0">
// sfc
{{ content }}
      </pre>
    </div>
    <h4 class="mt-5">Materials Upload</h4>
    <div class="mb-4 demo"></div>
    <h4 class="mt-5">Upload With CropperJS</h4>
    <div class="mb-4 demo"></div>
  </div>
</template>

<script>
import AvatarUpload from '@/components/upload-images/avatar-upload'
import avatarUploadText from '@/components/upload-images/avatar-upload.txt'

export default {
  name: 'upload-index',
  components: { AvatarUpload },
  data () {
    return {
      content: avatarUploadText,
    }
  },
}
</script>

<style scoped>
.avatar-1,
.avatar-2,
.avatar-3,
.avatar-4 {
  display: inline-block;
}
.avatar-2 {
  width: 100px;
  height: 100px;
  font-size: 2.5rem;
}
.avatar-3 {
  width: 150px;
  height: 150px;
  font-size: 4rem;
}
.avatar-4 {
  width: 150px;
  height: 200px;
  font-size: 5rem;
  border-radius: 8px;
}
</style>
