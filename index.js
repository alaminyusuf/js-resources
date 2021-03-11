const youtube = require('scrape-youtube').default

async function scrape() {
    await youtube.search('javascript').then(results => {
        const over100 = results.videos.filter(video => video.views >= 100000)
        console.log(over100)

    }).catch(e => {
        console.log(e)
    });

}

scrape()