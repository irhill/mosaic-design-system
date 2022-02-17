const fs = require('fs')
const path = require('path')
const glob = require('glob-all')

// search fields
// 1. collection
// 2. title
// 3. page text

glob.sync(['./_site/**/*.html', '!./_site/admin/**'])
  .forEach(file => {
    const content = fs.readFileSync(file, { encoding: 'utf8' })
    const filePath = path.dirname(file).replace('./_site', '')
    console.log('>>>>> ', filePath)
  })
