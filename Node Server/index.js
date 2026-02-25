const http=require('http')
const fs=require('fs')
// const myserver=http.createServer((req,res)=>{
// if(req.url=='/'){
// res.writeHead(200,{'Content-Type':'text/html'})
// res.write('<h1>ABES ENGINEERING COLLEGE</h1>')
// res.write('<img src="/logo" width="200">')
// res.end()
// }

// else if(req.url=='/logo'){
// fs.readFile(__dirname+'/uploads/abeslogo.jpg',(err,data)=>{
// if(err){
// res.end("image error")
// return
// }
// res.writeHead(200,{'Content-Type':'image/jpeg'})
// res.end(data)
// })
// }

// else{
// res.end("404 not found")
// }

// })

// myserver.listen(8000,()=>console.log("Server running on http://localhost:8000"))


// fs.writeFileSync("./CE-A.txt","we are CE students")
let result = fs.readFileSync("./CE.txt","utf-8")
fs.readFile("./CE.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log(result);
    }
})
// console.log(result);
