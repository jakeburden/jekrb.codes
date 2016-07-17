const http = require('http')
const fs = require('fs')

const st = require('st')
const trumpet = require('trumpet')
const routes = require('patterns')()
const marked = require('marked')
const level = require('level')
const oppressor = require('oppressor')
const through = require('through2')

const serve = st({
  path: 'browser/dist'
})

const createRoutes = require('./createRoutes')(routes, serve)

http.createServer(createRoutes).listen(9090, () => {
  console.log('server is runnin on http://localhost:9090')
})



routes.add('GET /', (req, res) => {
  const root = fs.createReadStream('components/index.html')
  const content = fs.createReadStream('content/test.markdown')
  
  const tr = trumpet()
  const entry = tr.select('#content').createWriteStream()
  const markdown = content.pipe(through(function (buf, enc, cb) {
    const markup = marked(buf.toString())
    this.push(markup)
    cb()
  }))
  
  markdown.pipe(entry)
  
  root.pipe(tr).pipe(res)
})

