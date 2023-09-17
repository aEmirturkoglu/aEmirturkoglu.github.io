const fs = require('fs')

const readStream = fs.createReadStream('./a.txt', {encoding: 'utf-8'})

//fs.createWriteStream

readStream.on('data', chunk => {
  console.log('-----------------');
  console.log(chunk);
})