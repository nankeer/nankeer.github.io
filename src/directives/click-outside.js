export default {
  inserted (el, binding) {
    const callback = binding.value
    const handler = (evt) => {
      if (el.contains(evt.target)) {
        return
      }
      if (typeof callback === 'function') {
        callback(evt)
      }
    }
    el.__click_outside_handler__ = handler
    document.addEventListener('click', handler, false)
  },
  unbind (el) {
    document.removeEventListener('click', el.__click_outside_handler__, false)
  },
}
