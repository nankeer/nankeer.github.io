<template>
  <div class="page">
    <h4>Element Image Lazy Prop</h4>
    <div class="element-image-lazy-prop row">
      <div class="col-12 col-md-4 col-lg-3" v-for="item in images1" :key="item">
        <el-image class="image-box" :src="item" :alt="item" fit="cover" lazy></el-image>
      </div>
    </div>
    <div class="source">
      <pre class="mb-0">
// https://gitee.com/ElemeFE/element/blob/dev/packages/image/src/main.vue
...
addLazyLoadListener() {
  if (this.$isServer) return;

  const { scrollContainer } = this;
  let _scrollContainer = null;

  if (isHtmlElement(scrollContainer)) {
    _scrollContainer = scrollContainer;
  } else if (isString(scrollContainer)) {
    _scrollContainer = document.querySelector(scrollContainer);
  } else {
    _scrollContainer = getScrollContainer(this.$el);
  }

  if (_scrollContainer) {
    this._scrollContainer = _scrollContainer;
    this._lazyLoadHandler = throttle(200, this.handleLazyLoad);
    on(_scrollContainer, 'scroll', this._lazyLoadHandler);
    this.handleLazyLoad();
  }
},
...
      </pre>
    </div>
    <h4 class="mt-5">ImageLoad Directive</h4>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="item in images2" :key="item">
        <div class="image-box">
          <img class="img-load" v-lazy="item" :alt="item" src="../../assets/default-image.png">
        </div>
      </div>
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
import { Image } from 'element-ui'
import LazyLoadImage from '@/directives/lazy-load-image'
import lazyLoadImageText from '@/directives/lazy-load-image.txt'

export default {
  name: 'lazy-load',
  components: {
    [Image.name]: Image,
  },
  directives: {
    lazy: LazyLoadImage,
  },
  data () {
    return {
      content: lazyLoadImageText,
      images1: [
        'https://images.pexels.com/photos/17040553/pexels-photo-17040553.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16972927/pexels-photo-16972927.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/15799202/pexels-photo-15799202.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17029375/pexels-photo-17029375.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16837989/pexels-photo-16837989.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/2490949/pexels-photo-2490949.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17206896/pexels-photo-17206896.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16664503/pexels-photo-16664503.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/9595492/pexels-photo-9595492.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/5429261/pexels-photo-5429261.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/15414191/pexels-photo-15414191.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16976842/pexels-photo-16976842.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/5748122/pexels-photo-5748122.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/13068862/pexels-photo-13068862.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/11602244/pexels-photo-11602244.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/6136711/pexels-photo-6136711.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/8554834/pexels-photo-8554834.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/7233086/pexels-photo-7233086.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/11824800/pexels-photo-11824800.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/15031202/pexels-photo-15031202.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17223590/pexels-photo-17223590/free-photo-of-hayatin-yansimasi.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/15240130/pexels-photo-15240130.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16786066/pexels-photo-16786066.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17211651/pexels-photo-17211651.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
      ],
      images2: [
        'https://images.pexels.com/photos/10503606/pexels-photo-10503606.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/14661929/pexels-photo-14661929.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/12993519/pexels-photo-12993519.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/14179062/pexels-photo-14179062.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16013906/pexels-photo-16013906.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/8910681/pexels-photo-8910681.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16960414/pexels-photo-16960414.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17193196/pexels-photo-17193196.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/15148649/pexels-photo-15148649.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16791877/pexels-photo-16791877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16668843/pexels-photo-16668843.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17036601/pexels-photo-17036601.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16761587/pexels-photo-16761587.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/9964659/pexels-photo-9964659.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/15721846/pexels-photo-15721846.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17039678/pexels-photo-17039678.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16500373/pexels-photo-16500373.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/13291350/pexels-photo-13291350.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16876978/pexels-photo-16876978.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17151882/pexels-photo-17151882.png',
        'https://images.pexels.com/photos/16847813/pexels-photo-16847813.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16948300/pexels-photo-16948300.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/16978553/pexels-photo-16978553.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/17115338/pexels-photo-17115338.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.image-box {
  width: 100%;
  height: 390px;
  padding-top: $grid-gutter-width / 2;
  padding-bottom: $grid-gutter-width / 2;
  .img-load {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.element-image-lazy-prop {
  ::v-deep .el-image {
    overflow: visible;
  }
  ::v-deep .el-image__placeholder {
    background: url('../../assets/default-image.png') no-repeat center center;
    background-size: auto 100%;
  }
}
</style>
