const Youtube = require('scrape-youtube').default
class GetVideoService {
    constructor() {
        this.YoutubeInst = Youtube;
    }
    async scrape(query) {
        try {
            const results = await this.YoutubeInst.search(query);
            const { videos } = results
            const cleasedData = this.filter(videos, 10000);
            const structuredData = cleasedData.map(({ link, title, views, channel: { name } }) => {
                return {
                    link,
                    title,
                    views,
                    name
                }
            });
            return structuredData;
        } catch (error) {
            throw new Error('Can not fetch youtube videos at this moment please try again later');
        }
    }
    filter(array = [], condition = 1000) {
        return array.filter(v => v.views > Number(condition));
    }
}

module.exports = GetVideoService;