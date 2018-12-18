const consign = require('consign');
const express = require('express');
const app = express();

app.use(express.static('./public'));
app.all((req,res)=>{
    res.sendfile('index.html')
})


module.exports = app;