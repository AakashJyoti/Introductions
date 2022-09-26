const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const path = require('path')


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname) + '/pages/index.html')
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname) + '/pages/about.html')
})

app.listen(PORT, () => console.log(`Listening on Port : ${PORT}`))