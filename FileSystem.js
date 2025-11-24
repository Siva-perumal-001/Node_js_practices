const fs = require('fs');

// if(!fs.existsSync('./folder1')){
//     fs.mkdir('./folder1',(err)=>{
//         if(err){
//             console.log(err.message)
//         }
//         else{
//             console.log("folder created");
//         }
//     })
// }

// fs.writeFile('./folder1/file1.txt',"This is the second file",(err)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else
//         console.log("File written")
// })

// if(fs.existsSync('./folder1/file1.txt')){
//     fs.readFile('./folder1/file1.txt',(err,data)=>{
//         if(err)
//             console.log(err.message)
//         else    
//             console.log(data.toString())
//     })
// }

if(fs.existsSync('./folder1/file1.txt')){
    fs.unlink('./folder1/file1.txt',(err)=>{
        if(err)
            console.log(err.message)
        else
            console.log("file deleted")
    })
}

if(fs.existsSync('./folder1')){
    fs.rmdir('./folder1',(err)=>{
        if(err)
            console.log(err.message)
        else
            console.log("folder deleted")
    })
}