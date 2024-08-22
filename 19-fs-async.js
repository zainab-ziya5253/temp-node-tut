//const fs=require('fs');
//destructuring async fs
const {readFile,writeFile}= require('fs');

// Reading txt file 
//callback hell alternatives are-promises and async await
console.log("start-->")
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result;
        writeFile(
            './content/result-async.txt',
            `here is the result ${first}, ${second}`,
            (err,result)=>{
                if(err){
                console.log(err)
                return
            }
            console.log('done w this task')
            }
        )
    })
})
console.log("starting next task")

//output
// start-->
// starting next task
// done w this task
