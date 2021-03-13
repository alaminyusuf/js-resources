const express = require('express')
const app = express()
const getVideoRoute = require('./router');
const controller = new Scrape()




app.get('/', (_, res) => res.json({ resources: "Resources" }))
app.use('/', getVideoRoute);

app.listen(3000, () => console.log('app running...'))