var path = require('path')
var adventuretron = require('adventuretron/main')

var app = adventuretron({
  title: 'Example adventuretron workshop',
  index: 'file://' + path.join(__dirname, 'index.html')
})

app.on('ready', function () {
  console.log('ready')
})
