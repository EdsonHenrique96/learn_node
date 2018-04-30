const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    res.end(fs.readFileSync('arquivo.txt'))    
}).listen(3000)