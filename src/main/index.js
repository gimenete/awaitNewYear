require('dotenv').config()
require('source-map-support').install()

const express = require('express')
const bodyparser = require('body-parser')
const fetch = require('node-fetch')

const app = exports.app = express()
app.disable('x-powered-by')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', async (req, res, next) => {
  // Express5 will support promises. So probably this try-catch won't be necessary
  try {
    const result = await fetch('https://api.github.com/users/gimenete')
    const json = await result.json()
    res.render('index', json)
  } catch (err) {
    next(err)
  }
})

if (module.id === require.main.id) {
  var port = +process.env.PORT
  app.listen(port)
  console.log('Server listening at http://127.0.0.1:%d', port)
}
