const youtube = require('scrape-youtube').default

async function scrape() {
    await youtube.search('javascript').then(results => {
        // Unless you specify a type, it will only return 'video' results
        console.log(results.videos);
    }).catch(e => {
        console.log(e)
    });
}

scrape()