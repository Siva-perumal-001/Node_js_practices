const http = require('http')

const server = http.createServer((request,response)=>{
    console.log("Request made")
})

server.listen(3000,'localhost',()=>{
    console.log('Server is Running')
})