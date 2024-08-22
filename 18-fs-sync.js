//const fs=require('fs');
//destructuring sync fs
console.log('start-->')
const {readFileSync,writeFileSync}= require('fs');

// Reading txt file 
// 1st para:file path 2nd para:encoding
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

console.log(first,second)

// Writing into txt file
//1st para: file path 2nd para:text to be written
writeFileSync(
    './content/result-sync.txt', 
    `here is the result ${first}, ${second}`,
    {flag: 'a'} //to append,by default it overrides
)

console.log('done w this task')
console.log('starting a new one->')

//output
// start-->
// Hello this is the 1st text file. Hello this is the 2st text file.
// done w this task
// starting a new one->






