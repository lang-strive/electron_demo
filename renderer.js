// const http = require('http');
const fs = require('fs');

// var server=http.createServer((req,res)=>{
//     alert(111);
// })
// server.listen(8088);
var aa=document.querySelector('#aaa');
var urlLib='./package.json';
fs.readFile(urlLib,(err,data)=>{
    var data2=eval('('+data+')')
    aa.innerHTML=data2.version;
})
