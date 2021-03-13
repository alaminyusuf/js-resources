const GetVideoService = require('../services/getVideo.service');
class GetVideoControll {
    constructor() {
        this.service = new GetVideoService();
    }

    async getVideoHandler(_, res) {
        let serverResponse = {
            status: 200,
            error: false
        }
        try {
            const data = await this.service.scrape('javascript');
            serverResponse.data = data;

        } catch (error) {
            serverResponse.status = 500;
            serverResponse.error = true;
            serverResponse.data = 'Something went wrong';
        } finally {
            res.json(serverResponse);
            return;
        };
    };
};

module.exports = GetVideoControll;