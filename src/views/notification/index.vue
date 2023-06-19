<template>
  <div class="page">
    <h4>Element UI Notification</h4>
    <div class="demo mb-3">
      <button type="button" class="btn btn-primary" @click="notify1">Notify</button>
    </div>
    <div class="source">
      <pre class="mb-0">
// style
.el-notification {
  transition: opacity .3s, transform .3s, left .3s, right .3s, top 0.4s, bottom .3s;
}
.el-notification-fade-enter {
  right: 0;
  transform: translateX(100%);
}
.el-notification-fade-leave-active {
  opacity: 0;
}
===================================================
// js
Notification({
  title: String,
  message: String|VNode,
  duration: Number, // 0 always open
  showClose: Boolean,
  offset: Number, // 0 default
  onClose: Function,
})
      </pre>
    </div>
    <h4 class="mt-5">jQuery Animate</h4>
    <div class="demo mb-3">
      <button type="button" class="btn btn-primary" @click="notify2">Notify</button>
      <ul class="list-unstyled notifications" ref="notifications"></ul>
    </div>
    <div class="source">
      <pre class="mb-0">
// js
const notification = jQuery('&lt;li class="notification" /&gt;').html(content).css({
  left: 346,
})
jQuery(this.$refs.notifications).append(notification)

notification.animate({
  left: 0
}, 300, function () {
  jQuery(this).delay(4500).animate({
    left: 346
  }, 200, function () {
    jQuery(this).slideUp(100, function () {
      jQuery(this).remove()
    })
  })
})
      </pre>
    </div>
  </div>
</template>

<script>
import jQuery from 'jquery'
import { Notification } from 'element-ui'

export default {
  name: 'notification-index',
  methods: {
    notify1 () {
      Notification({
        title: 'Tips',
        message: 'This is a notification.',
        showClose: false,
      })
    },
    notify2 () {
      const text = 'This is a notification.'
      const content = `
        <div class="notification-content">
          <h5 class="notification-title">Tips</h5>
          <p class="mb-0 notification-message">${text}</p>
        </div>
      `
      const notification = jQuery('<li class="notification" />').html(content).css({
        left: 346,
      })
      jQuery(this.$refs.notifications).append(notification)
      notification.animate({
        left: 0
      }, 300, function () {
        jQuery(this).delay(4500).animate({
          left: 346
        }, 200, function () {
          jQuery(this).slideUp(100, function () {
            jQuery(this).remove()
          })
        })
      })
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/style/mixins.scss";

.notifications {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2000;
  .notification-content {
    margin-left: 13px;
    margin-right: 8px;
  }
  .notification {
    margin-top: 1rem;
    margin-right: 1rem;
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    border: 1px solid #EBEEF5;
    background-color: $body-bg;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;
    position: relative;
  }
}
.notification-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}
.notification-message {
  font-size: 1rem;
  line-height: 21px;
  margin: 6px 0 0;
  color: #606266;
  text-align: justify;
}
</style>
