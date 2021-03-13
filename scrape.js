const youtube = require('scrape-youtube').default

class Scrape {

    scrape = (req, res) => {
        youtube.search('javascript').then(results => {
            const over100 = results.videos.filter(video => video.views >= 100000)
            over100.forEach(video => {
                const resources = []
                const { link, title, views, channel } = video
                const data = {
                    link,
                    name: channel.name,
                    title,
                    views,
                }
                resources.push(data)
                console.log(resources)
                return res.json({ resources })
            })

        }).catch(e => {
            console.log("----Error:", e)
        });

    }

}

module.exports = Scrape
