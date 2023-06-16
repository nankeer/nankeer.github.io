import defaultImage from '@/assets/default-image.png'

export default {
  inserted (el, binding) {
    el.src = defaultImage
    const src = binding.value
    if (window.IntersectionObserver) {
      const intersectionObserver = el.intersectionObserver = new window.IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = src
            intersectionObserver.unobserve(entry.target)
          }
        })
      })
      intersectionObserver.observe(el)
    } else {
      console.log('IntersectionObserver API is not supported.')
      el.src = src
    }
  },
  unbind (el) {
    if (el.intersectionObserver) {
      el.intersectionObserver.disconnect()
      el.intersectionObserver = null
    }
  },
}
