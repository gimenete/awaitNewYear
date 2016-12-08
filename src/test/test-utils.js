const main = require('../main')
const app = main.app
const fetch = require('node-fetch')
const querystring = require('querystring')
let baseURL

exports.fetch = (path, options) => {
  if (!baseURL) {
    const server = require('http').createServer(app).listen(0)
    const port = server.address().port
    baseURL = `http://127.0.0.1:${port}`
  }
  const body = options && options.body
  if (Object.prototype.toString.call(body) === '[object Object]') {
    options.body = querystring.stringify(body)
    options.headers = Object.assign(options.headers || {}, {
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  return fetch(baseURL + path, options)
}

exports.cleanDatabase = () => {

}
