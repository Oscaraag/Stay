export const LinkHandler = (PAGEURL) => {
  const win = window.open(PAGEURL, '_blank')
  win.focus()
}
