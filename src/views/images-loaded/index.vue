<template>
  <div class="page">
    <h2>imagesLoaed</h2>
    <div class="blockquote">
      JavaScript is all like "You images done yet or what?"
      <a href="https://imagesloaded.desandro.com/" target="_blank">https://imagesloaded.desandro.com/</a>
      Detect when images have been loaded.
    </div>
    <div class="row no-gutters" style="margin-left:-2px;margin-right:-2px;" id="image-box">
      <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="item in images" :key="item">
        <div class="demo">
          <img class="img-fluid" :src="item" :alt="item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Isotope from 'isotope-layout/js/isotope'
import Isotope from '@/libs/isotope.pkgd'
import imagesLoaded from '@/libs/imagesloaded.pkgd'
import { Notification } from 'element-ui'

export default {
  name: 'images-loaded',
  data () {
    return {
      images: [
        'https://images.pexels.com/photos/17040553/pexels-photo-17040553.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16972927/pexels-photo-16972927.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/15799202/pexels-photo-15799202.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17029375/pexels-photo-17029375.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16837989/pexels-photo-16837989.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/2490949/pexels-photo-2490949.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17206896/pexels-photo-17206896.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16664503/pexels-photo-16664503.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/9595492/pexels-photo-9595492.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/5429261/pexels-photo-5429261.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/15414191/pexels-photo-15414191.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16976842/pexels-photo-16976842.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/5748122/pexels-photo-5748122.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/13068862/pexels-photo-13068862.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/11602244/pexels-photo-11602244.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/6136711/pexels-photo-6136711.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/8554834/pexels-photo-8554834.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/7233086/pexels-photo-7233086.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/11824800/pexels-photo-11824800.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/15031202/pexels-photo-15031202.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17223590/pexels-photo-17223590/free-photo-of-hayatin-yansimasi.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/15240130/pexels-photo-15240130.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16786066/pexels-photo-16786066.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17211651/pexels-photo-17211651.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/10503606/pexels-photo-10503606.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/14661929/pexels-photo-14661929.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/12993519/pexels-photo-12993519.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/14179062/pexels-photo-14179062.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16013906/pexels-photo-16013906.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/8910681/pexels-photo-8910681.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16960414/pexels-photo-16960414.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17193196/pexels-photo-17193196.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/15148649/pexels-photo-15148649.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16791877/pexels-photo-16791877.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16668843/pexels-photo-16668843.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17036601/pexels-photo-17036601.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16761587/pexels-photo-16761587.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/9964659/pexels-photo-9964659.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/15721846/pexels-photo-15721846.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17039678/pexels-photo-17039678.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16500373/pexels-photo-16500373.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/13291350/pexels-photo-13291350.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16876978/pexels-photo-16876978.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17151882/pexels-photo-17151882.png',
        'https://images.pexels.com/photos/16847813/pexels-photo-16847813.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16948300/pexels-photo-16948300.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/16978553/pexels-photo-16978553.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        'https://images.pexels.com/photos/17115338/pexels-photo-17115338.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
      ],
      isotope: null,
    }
  },
  beforeDestroy () {
    if (this.isotope) {
      this.isotope.destroy()
    }
  },
  mounted () {
    this.makeIsotope()
  },
  methods: {
    makeIsotope () {
      imagesLoaded('#image-box', function () {
        console.log('All images have loaded.')
        Notification({
          title: 'Tips',
          message: 'All images have loaded.'
        })
        this.isotope = new Isotope('#image-box')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.demo {
  border: 2px solid $body-bg;
  background-color: darken($body-bg, 3%);
}
</style>
