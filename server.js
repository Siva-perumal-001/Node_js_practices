const http = require('http')
const fs = require('fs')

const server = http.createServer((request,response)=>{

    let path = './folder1/'
    console.log(request.url);

    response.setHeader('Content-Type','text/html');

    if(request.url == '/'){
        path += 'index.html'
    }
    else if(request.url == '/home'){
        response.statusCode=301;
        response.setHeader('Location','/');
        response.end();
    }
    else if(request.url == '/page1'){
        path += 'page1.html'
        response.statusCode= 200;
    }
    else if(request.url == '/about'){
        path += 'about.html'
        response.statusCode = 200;
    }
    else{
        path += 'error.html'
        response.statusCode = 404;
    }
   
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            response.end();
        }
        else{
            // response.write(data)
            // response.end();
            response.end(data)
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('Server is Running')
})