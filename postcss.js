const fs = require('fs')
const postcss = require('postcss')
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const css = fs.readFileSync('css/index.css', 'utf8')

postcss([atImport, autoprefixer, cssnano])
  .process(css, {
    from: 'css/index.css'
  })
  .then(res => {
    fs.writeFileSync('dist/bundle.css', res.css)
  })
