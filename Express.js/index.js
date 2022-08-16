const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.get('/about', (req, res) =>{
    // res.send('You are in about')
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/contact', (req, res) =>{
    res.send('You are in contact')
})


app.listen(port, () =>{
    console.log(`Example app listing at http://localhost:${port}`)
})