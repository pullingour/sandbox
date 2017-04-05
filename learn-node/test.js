const http = require('http'),
      fs = require('fs')
const settings = require('./settings')
const server = http.createServer()
server.on('request', function(req, res){
  let msg
  switch(req.url) {
    case '/about' :
      msg = 'about page'
      break
    case '/profile' :
      msg = 'profile page! :D'
      break
    default :
      msg = 'wrong page'
      break
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(msg)
  res.end();
})

server.listen(settings.port)
console.log('Server Listening ...')
