<template>
  <div class="page">
    <h2>Waypoints</h2>
    <div class="blockquote">
      Waypoints is the easiest way to trigger a function when you scroll to an element.
      <a href="http://imakewebthings.com/waypoints/" target="_blank">http://imakewebthings.com/waypoints/</a>
    </div>
    <h4>Getting Started</h4>
    <p>The first thing you'll need to do is download Waypoints. The lib/ directory contains builds for jQuery and Zepto,
      as well as a version with no framework dependencies. Choose the one that fits your needs and include it.</p>
    <div class="source">
      <pre class="mb-0">
&lt;script src="/path/to/noframework.waypoints.min.js"&gt;&lt;/script&gt;
      </pre>
    </div>
    <p>The rest of this guide and any code snippets on this site, unless otherwise noted, will be using the no-framework
      build. If you're interested in the goodies that come with jQuery and Zepto builds, take a look at the jQuery/Zepto
      guide. Code snippets for the no-framework build will work in other builds.</p>
    <h4 class="mt-5" ref="anchor1">A Basic Waypoint</h4>
    <p>With Waypoints included, we now have access to a global Waypoint class. We create waypoints by instantiating this
      class. When creating a new Waypoint we must pass it an options object. There are many properties you can set on
      this options object, but two of them are required, element, and handler.</p>
    <div class="source">
      <pre class="mb-0">
var waypoint = new Waypoint({
  element: document.getElementById('basic-waypoint'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})
      </pre>
    </div>
    <p>The element tells Waypoints which DOM element's position to observe during scroll, and handler is the function
      that will trigger when the top of that element hits the top of the viewport.</p>
    <h4 class="mt-5" ref="anchor2">Directions</h4>
    <p>You may notice the basic example above triggers when we scroll through the waypoint both downwards and upwards.
      What if we want to perform different actions when scrolling up, or limit our handler to one direction? When a
      waypoint is triggered, the handler function is passed a direction parameter.</p>
    <div class="source">
      <pre class="mb-0">
var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})
      </pre>
    </div>
    <h4 class="mt-5" ref="anchor3">Offsets</h4>
    <p>By default a waypoint triggers when the top of the element hits the top of the window. What if we want it to
      trigger when the element is 20px from the top instead?</p>
    <div class="source">
      <pre class="mb-0">
var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20
})
      </pre>
    </div>
    <p>The offset option can take a variety of different values to help us control where a waypoint is triggered. For
      more information, check out the offset option documentation.</p>
    <h4 class="mt-5" ref="anchor4">this?</h4>
    <p>When we're inside the handler function the this keyword is a reference to the Waypoint instance. We can use this
      object to access all the properties and methods in the API. One of the most useful properties is element, the
      waypoint's DOM element.</p>
    <div class="source">
      <pre class="mb-0">
var waypoint = new Waypoint({
  element: document.getElementById('element-waypoint'),
  handler: function(direction) {
    notify(this.element.id + ' triggers at ' + this.triggerPoint)
  },
  offset: '75%'
})
      </pre>
    </div>
    <h4 class="mt-5" ref="anchor5">Now What?</h4>
    <p>This has been a very brief guide to the basics of Waypoints. The API documentation goes into more depth about all
      of the options, methods, and properties available to us. In addition to being a reference for more technically
      savvy developers, each of the API pages acts as a guide for how to use that feature. The docs are intended to be
      useful for beginners and experts alike.</p>
    <p>If you already have a use for Waypoints in mind, take a moment to check out the Shortcuts section. These shortcut
      scripts take some of the most common uses of Waypoints and packages them into ready-made extensions.</p>
  </div>
</template>

<script>
import '@/libs/noframework.waypoints'
import { Notification } from 'element-ui'

const Waypoint = window.Waypoint
function notify (text) {
  Notification({
    title: 'Tips',
    message: text,
  })
}

export default {
  name: 'waypoints-index',
  data () {
    return {
      waypoints1: null,
      waypoints2: null,
      waypoints3: null,
      waypoints4: null,
      waypoints5: null,
    }
  },
  beforeDestroy () {
    Waypoint.destroyAll()
    this.waypoints1 = null
    this.waypoints2 = null
    this.waypoints3 = null
    this.waypoints4 = null
    this.waypoints5 = null
  },
  mounted () {
    const anchor1 = this.$refs.anchor1
    const anchor2 = this.$refs.anchor2
    const anchor3 = this.$refs.anchor3
    const anchor4 = this.$refs.anchor4
    const anchor5 = this.$refs.anchor5

    this.waypoints1 = new Waypoint({
      element: anchor1,
      handler: function () {
        notify('Basic waypoint triggered')
      }
    })

    this.waypoints2 = new Waypoint({
      element: anchor2,
      handler: function (direction) {
        notify('Direction: ' + direction)
      }
    })

    this.waypoints3 = new Waypoint({
      element: anchor3,
      handler: function (direction) {
        notify('I am 20px from the top of the window')
      },
      offset: 20
    })

    this.waypoints4 = new Waypoint({
      element: anchor4,
      handler: function (direction) {
        notify('I am 20px from the top of the window')
      },
      offset: 20
    })

    this.waypoints5 = new Waypoint({
      element: anchor5,
      handler: function (direction) {
        notify(this.element.id + ' triggers at ' + this.triggerPoint)
      },
      offset: '75%'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.page p {
  font-size: 1.1rem;
}
.page h4:hover::after {
  content: '#';
  margin-left: .5em;
  color: $theme-color;
}
.page .source {
  margin-bottom: 1rem;
}
</style>
