const toggleSwitch = document.querySelector('#theme-toggle')
const currentTheme = window.localStorage.getItem('theme')
const homePageVideo = document.getElementById('home-page-video')
console.log(homePageVideo)

function setDarkTheme () {
  toggleSwitch.classList.remove('light-theme-set')
  toggleSwitch.classList.add('dark-theme-set')
  if (homePageVideo) {
    homePageVideo.setAttribute('src', '/assets/img/1031784596-preview.mp4')
  }
  
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

    if (homePageVideo) {
      homePageVideo.setAttribute('src', '/assets/img/1031784596-preview.mp4')
    }
    

  } else {
    document.documentElement.setAttribute('data-color-theme', 'light')
    window.localStorage.setItem('theme', 'light')
    toggleSwitch.classList.remove('dark-theme-set')

    if (homePageVideo) {
      homePageVideo.setAttribute('src', '/assets/img/1062047155-preview.mp4')
    }
  }
})
