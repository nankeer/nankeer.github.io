let seed = 0
const ctx = '@@draggableContext'
const isMobile = /mobile/i.test(window.navigator.userAgent)
const EVENT = {
  MOUSE_DOWN: isMobile ? 'touchstart' : 'mousedown',
  MOUSE_MOVE: isMobile ? 'touchmove' : 'mousemove',
  MOUSE_UP: isMobile ? 'touchend' : 'mouseup'
}

function handleMousedown (event) {
  if (isMobile) {
    event.preventDefault()
  }
  const el = this
  const rect = el.getBoundingClientRect()

  el.style.position = 'fixed'

  Object.assign(el[ctx], {
    type: EVENT.MOUSE_DOWN,
    rect: rect,
    x: rect.x || rect.left,
    y: rect.y || rect.top,
    dragstartX: isMobile ? event.touches[0].clientX : event.clientX, // 鼠标按下时坐标
    dragstartY: isMobile ? event.touches[0].clientY : event.clientY,
    dragendX: undefined, // 鼠标松开时坐标
    dragendY: undefined,
    startX: isMobile ? event.touches[0].clientX : event.clientX, // 起点坐标
    startY: isMobile ? event.touches[0].clientY : event.clientY,
    dragging: true,
    isMove: false,
  })

  callback(el)

  window.addEventListener(EVENT.MOUSE_MOVE, el[ctx]._handleMousemove, false)
  window.addEventListener(EVENT.MOUSE_UP, el[ctx]._handleMouseup, false)
}

function handleMousemove (el) {
  return function (event) {
    if (!isMobile) {
      event.preventDefault()
    }

    if (event.target === document.documentElement) return

    const current = {
      x: isMobile ? event.touches[0].clientX : event.clientX,
      y: isMobile ? event.touches[0].clientY : event.clientY,
    }

    const diff = {
      x: current.x - el[ctx].startX,
      y: current.y - el[ctx].startY,
    }

    if (el[ctx].binding.modifiers.sticky) {
      // 不会拖出屏幕边缘
      const clientWidth = document.documentElement.clientWidth
      const clientHeight = document.documentElement.clientHeight

      const {
        x,
        y,
        rect: {
          width,
          height
        },
      } = el[ctx]

      if (diff.x < 0 && x + diff.x <= 0) {
        el[ctx].x = 0
      } else if (diff.x > 0 && x + width - clientWidth >= 0) {
        el[ctx].x = clientWidth - width
      } else {
        el[ctx].x += diff.x
      }

      if (diff.y < 0 && y + diff.y <= 0) {
        el[ctx].y = 0
      } else if (diff.y > 0 && y + height - clientHeight >= 0) {
        el[ctx].y = clientHeight - height
      } else {
        el[ctx].y += diff.y
      }
    } else {
      el[ctx].x += diff.x
      el[ctx].y += diff.y
    }

    Object.assign(el[ctx], {
      type: EVENT.MOUSE_MOVE,
      startX: current.x,
      startY: current.y,
      diffX: diff.x,
      diffY: diff.y,
      isMove: true,
    })

    callback(el)
  }
}

function handleMouseup (el) {
  return function (event) {
    if (!isMobile) {
      event.preventDefault()
    }

    const lastType = el[ctx].type

    Object.assign(el[ctx], {
      type: EVENT.MOUSE_UP,
      dragendX: isMobile ? el[ctx].startX : event.clientX, // 鼠标按下时坐标
      dragendY: isMobile ? el[ctx].startY : event.clientY,
      dragging: false,
      isMove: lastType === EVENT.MOUSE_MOVE,
    })

    callback(el)

    window.removeEventListener(EVENT.MOUSE_MOVE, el[ctx]._handleMousemove, false)
    window.removeEventListener(EVENT.MOUSE_UP, el[ctx]._handleMouseup, false)
  }
}

function callback (el) {
  const bindingFn = el[ctx]?.binding?.value
  if (typeof bindingFn === 'function') {
    bindingFn({
      ...el[ctx],
      target: el
    })
  } else {
    const {
      x,
      y,
      rect,
      dragging
    } = el[ctx]
    if (!dragging) return
    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${rect.width}px;
      height: ${rect.height}px;
    `
  }
}

/**
 * v-draggable
 * @desc
 * @example
 * ```vue
 * <div v-draggable>
 *
 * <div v-draggable.sticky>
 * <div v-draggable="handleDraggable">
 * ```
 */
export default {
  bind (el, binding, vnode) {
    const id = seed++
    el[ctx] = {
      id,
      binding,
      vnode,
      _handleMousemove: handleMousemove(el, binding, vnode),
      _handleMouseup: handleMouseup(el, binding, vnode),
    }

    el.addEventListener(EVENT.MOUSE_DOWN, handleMousedown, false)
  },

  unbind (el) {
    window.removeEventListener(EVENT.MOUSE_MOVE, el[ctx]._handleMousemove, false)
    window.removeEventListener(EVENT.MOUSE_UP, el[ctx]._handleMouseup, false)
    el.removeEventListener(EVENT.MOUSE_DOWN, handleMousedown, false)
    delete el[ctx]
  },
}
