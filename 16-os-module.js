const os= require('os');//builtin module so no ./

//info about current user
const user=os.userInfo()
console.log(user)

//method returns the sys uptime in sec
console.log(`The sys uptime is ${os.uptime()} secs`)

//data about os of computer
const currentOs ={
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);