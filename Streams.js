const fs = require('fs');

const readStream = fs.createReadStream('./folder1/file1.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./folder1/file2.txt')

// readStream.on('data',(buffer)=>{
//     console.log(buffer)
// })

// readStream.on('data',(buffer)=>{
//     writeStream.write(buffer)
// })

readStream.pipe(writeStream);