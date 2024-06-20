const { TweetService } = require('../services/')
const {StatusCodes}  = require('http-status-codes')
const {ErrorResponse,SuccessResponse} = require('../utils/common')

async function createTweet(req,res){
    try {
        const data = req.body
        const response  = await TweetService.create(data)
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        throw(error)
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
