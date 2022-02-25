const toggleSwitch = document.querySelector('#theme-toggle')
const currentTheme = window.localStorage.getItem('theme')

function setDarkTheme () {
  toggleSwitch.classList.remove('light-theme-set')
  toggleSwitch.classList.add('dark-theme-set')
}

if (currentTheme) {
  document.documentElement.setAttribute('data-color-theme', currentTheme)
  if (currentTheme === 'dark') {
    setDarkTheme()
  }
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    setDarkTheme()
  }
}

toggleSwitch.addEventListener('click', e => {
  if (e.target.closest('.mcc-navigation-header__button:not(.dark-theme-set)')) {
    document.documentElement.setAttribute('data-color-theme', 'dark')
    window.localStorage.setItem('theme', 'dark')
    toggleSwitch.classList.add('dark-theme-set')
  } else {
    document.documentElement.setAttribute('data-color-theme', 'light')
    window.localStorage.setItem('theme', 'light')
    toggleSwitch.classList.remove('dark-theme-set')
  }
})
