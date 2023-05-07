const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.num1);
    var a = Number(q.num1);
    console.log(q.num2);
    var b= Number(q.num2);
    var add=a+b;
    res.write("Addition "+add);
    res.end();   
}).listen(8080);