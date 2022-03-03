const showSearchDialog = () => {
  const dialog = document.getElementById('search-dialog')
  dialog.show()
}

const closeSearchDialog = () => {
  const dialog = document.getElementById('search-dialog')
  dialog.close()
}

window.addEventListener('keydown', evt => {
  // if ctrl-k is pressed show the search dialog and prevent default behaviour
  // which is to search in the address bar
  if (evt.ctrlKey && evt.key === 'k') {
    showSearchDialog()
    evt.preventDefault()
    evt.stopPropagation()
  }

  // if the escape key is pressed close the search dialog
  if (evt.key === 'Escape') {
    closeSearchDialog()
  }
})