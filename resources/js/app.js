// Dark mode toggle in the top navigation
const THEME_KEY = 'theme'

function applyTheme(theme) {
  const dark = theme === 'dark'
  document.body.classList.toggle('kit-light', !dark)
  const button = document.getElementById('theme-toggle')
  if (button) button.setAttribute('aria-pressed', String(dark))
}

function init() {
  const button = document.getElementById('theme-toggle')
  if (!button) return
  applyTheme(document.body.classList.contains('kit-light') ? 'light' : 'dark')
  button.addEventListener('click', () => {
    const next = document.body.classList.contains('kit-light') ? 'dark' : 'light'
    applyTheme(next)
    try { localStorage.setItem(THEME_KEY, next) } catch (e) {}
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}
