const http = require('http')
const fs = require('fs')

const st = require('st')
const trumpet = require('trumpet')
const routes = require('patterns')()
const marked = require('marked')
const level = require('level')
const oppressor = require('oppressor')

const serve = st({
  path: 'browser/dist'
})

const createRoutes = require('./createRoutes')(routes, serve)

http.createServer(createRoutes).listen(9090, () => {
  console.log('server is runnin on http://localhost:9090')
})

routes.add('GET /', (req, res) => {
  res.end('test')
})

