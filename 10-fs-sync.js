const { readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8')

const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first, second)

const third = writeFileSync('./content/third.txt',`Here is the third: ${first},${second}`)
console.log('done with this task');
console.log('starting the next one');


