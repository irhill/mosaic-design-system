window.addEventListener('DOMContentLoaded', async () => {
  const [idx, docs] = await Promise.all([
    window.fetch('/assets/js/search-index.json').then(res => res.json()),
    window.fetch('/assets/js/search-docs.json').then(res => res.json())
  ])

  window.design_system_search_index = window.lunr.Index.load(idx)
  window.design_system_search_data = docs

  const searchInput = document.querySelector('input[type=text]#search')
  searchInput.addEventListener('keyup', evt => {
    const searchTerm = evt.target.value

    if (searchTerm.length < 3) clearResults()
    else showResults(searchTerm)
  })
})

const toggleSearchInput = () => {
  const search = document.getElementById('search-container')
  if (search.classList.contains('closed')) {
    search.classList.remove('closed')
  } else {
    search.querySelector('input').value = ''
    clearResults()
    search.classList.add('closed')
  }
  
}

const clearResults = () => {
  const listGroup = document.getElementById('search-results')
  listGroup.clearData()
}

const showResults = str => {
  const listGroup = document.getElementById('search-results')

  const terms = str.split(' ').filter(Boolean)

  const results = window.design_system_search_index.search(terms.map(t => `${t}*`).join(' ')).map(result => {
    const { collection, title, tab } = window.design_system_search_data[result.ref]
    return {
      ...result,
      title,
      ...collection && { collection },
      ...tab && { tab }
    }
  })

  const data = results.map(result => {
    const prefix = [result.collection, result.title, result.tab].filter(Boolean)

    return `
      <div onclick="navigateTo('${result.ref}')">
        <div><strong>${prefix.join(' > ')}</strong></div>
        <div>This is some context, hopefully this will work (finger crossed, in fact everything crossed!)</div>
      </div>
    `
  })

  listGroup.setData({ data })
}

const navigateTo = path => {
  window.location.href = path
}

const searchContent = () => {
  const searchInput = document.querySelector('input[type=text]#search')
  const searchStr = searchInput.value
  const results = searchStr && searchStr.length
    ? window.design_system_search_index.search(searchStr).map(result => {
      const { title, tab } = window.design_system_search_data[result.ref]
      return {
        ...result,
        title,
        ...tab && { tab }
      }
    })
    : []

  console.log(searchStr)
  console.log(results)
}