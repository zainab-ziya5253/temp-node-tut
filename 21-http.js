const http= require('http');

// req:incoming req | res:what we are sending back
const server=http.createServer((req,res)=>{
 if (req.url==='/'){
    res.end('Welcome to our homepage');
 }
 if (req.url==='/about'){
    res.end('Here is our short history');
 }
 res.end(
    `<h1>Oops!</h1>
    <p>We cant seem to find the pg you're looking for</p>
    <a href='/' >back home</a>`
    )
})

server.listen(5000);






