function addWaterMarker (
  el,
  str,
  options = {}
) {
  const canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 100
  canvas.style.display = 'none'
  el.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  ctx.rotate((-20 * Math.PI) / 180)
  ctx.font = options.font
  ctx.fillStyle = options.fillStyle || 'rgba(0,0,0,0.3)'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillText(str, canvas.width / 10, canvas.height / 2)

  el._water_marker_canvas_ = canvas
  el.style.backgroundImage = 'url(' + canvas.toDataURL('image/png') + ')'
}

export default {
  bind (el, binding) {
    addWaterMarker(el, binding.value || 'snippets admin', {
      font: '16px HoangYen11, sans-serif'
    })
  },
  unbind (el) {
    if (el._water_marker_canvas_) {
      el._water_marker_canvas_.parentNode.removeChild(el._water_marker_canvas_)
      el.style.background = 'transparent'
    }
  },
}
