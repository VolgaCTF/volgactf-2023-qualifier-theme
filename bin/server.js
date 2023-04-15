const app = require('../app')

function getServerPort () {
  return parseInt(process.env.PORT || '7037', 10)
}

function getServerHost () {
  return process.env.HOST || '127.0.0.1'
}

let server = app.listen(getServerPort(), getServerHost(), function () {
  console.log(`Server listening on ${server.address().address}:${server.address().port}`)
})
