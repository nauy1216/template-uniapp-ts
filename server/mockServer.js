const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  console.log('mock server ==>>', req.url)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Age', 0)
  next()
})

app.get('*', handler)

app.post('*', handler)

app.listen(5555, error => {
  if (!error) {
    console.log('mock server ===> localhost:5555')
  } else {
    console.log(error)
  }
})

function handler(req, res) {
  // console.log(res)
  try {
    const filename = req.path.replace(/\//g, '^')
    let data = getData(filename)(req.query, req.body)
    setTimeout(() => {
      res.send(data)
    }, 500)
  } catch (e) {
    res.send('Error')
  }
}

function getData(filename) {
  const filePath = path.resolve(__dirname, './data/' + filename + '.js')
  return require(filePath)
}
