import http from 'http';
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if (req.url==='/users'){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify({name:"thub"}))

    }
    else{
        res.writeHead(200,{'content-type':'text/plain'});
        res.end('hello bakend');

    }


    
});
server.listen(7007,()=>{
    console.log("serever running at posr ${7007}")


});
