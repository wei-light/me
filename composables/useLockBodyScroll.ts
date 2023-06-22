function getScrollbarWidth() {
  const outer = window.innerWidth
  const inner = document.body.clientWidth || document.documentElement.clientWidth

  return outer - inner
}

export function useLockBodyScroll(initialState = false) {
  const isLocked = ref(initialState)

  watch(isLocked, (newVal) => {
    if (typeof window !== 'undefined') {
      const scrollbarWidth = getScrollbarWidth()

      document.body.style.overflow = newVal ? 'hidden' : 'visible'
      document.body.style.paddingRight = newVal ? `${scrollbarWidth}px` : ''
    }
  }, { immediate: true })

  return isLocked
}
