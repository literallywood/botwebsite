const express = require('express')
const mongoose = require('mongoose')
const app = express()
const http = require('http');
const server = http.createServer((req,res)=>{
  res.end('response given');
})

server.listen(3000, "127.0.0.1", ()=>{
  console.log("server listening on port no 3000")
});


mongoose.connect("mongodb+srv://root:toor@balls.agz2qxo.mongodb.net/", {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('connection successful')
}).catch((err) => console.log('no connection'));



