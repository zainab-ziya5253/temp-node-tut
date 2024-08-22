const path= require('path')

//separator \
console.log(path.sep)// \

//makes filepath from .join 
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath) //\content\subfolder\test.txt

//shows the base name of fiePath
const base=path.basename(filePath)
console.log(base)//test.txt

//provides absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)//D:\WORKINGDATA\Desktop\Mini projects\node and express\content\subfolder\test.txt