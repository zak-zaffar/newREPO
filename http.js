const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to my page')
    }
    if (req.url === '/about'){
        res.end('stuff happened')
    }
    
})

server.listen(5000)