const { TweetService } = require('../services/')
const {StatusCodes}  = require('http-status-codes')
const {ErrorResponse,SuccessResponse} = require('../utils/common')
const { FileUpload } = require('../config');
const singleUploader = FileUpload.upload.single('image');
 
async function createTweet(req, res) {
    try {
       
        await new Promise((resolve, reject) => {
            singleUploader(req, res, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });

       
        console.log(req.file);
        
        const payload = { ...req.body };
        payload.image = req.file.location;
        const response = await TweetService.create(payload);
        
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);

    } catch (error) {
        console.error('Error:', error);

        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getTweets(req,res){
    try {
        const id = req.params.id
        const response  = await TweetService.getTweets(id)
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        throw(error)
    }
}


module.exports = {
    getTweets,
    createTweet
}
