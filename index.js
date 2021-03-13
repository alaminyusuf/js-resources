const express = require('express')
const Scrape = require('./scrape')
const app = express()

const controller = new Scrape()


app.get('/', (req, res) => res.json({ resources: "Resources" }))
app.get('/resources', (req, res) => {
    console.log('making request to youtube')
    controller.scrape(req, res)
})

app.listen(3000, () => console.log('app running...'))