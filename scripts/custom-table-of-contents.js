const HTMLParser = require('node-html-parser')
const slugify = require('./slugify-string')


module.exports = content => {
  const contents = []

  const root = HTMLParser.parse(content)
  root.querySelectorAll('h2').forEach(x => {
    const id = slugify(x.innerText)
    const text = x.innerText
    contents.push({ id, text })
  })

  const contentsContainer = HTMLParser.parse(`
    <div class="mu-mb-05">
      <script>
        function scrollToElem(id) {
          document.getElementById(id).scrollIntoView()
        }
      </script>
      ${contents.map(x => `
        <button class="mcc-button mcc-button--anchor mu-d-block" onclick="scrollToElem('${x.id}')">
          <span class="mcc-button__label">${x.text}</span>
        </button>
      `).join('')}
    </div>
  `)

  return contentsContainer.outerHTML
}