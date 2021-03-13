const express = require('express')
const app = express()
const getVideoRoute = require('./router');




app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'))
app.use('/', getVideoRoute);

app.listen(3000, () => console.log('app running...'))