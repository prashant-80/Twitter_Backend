const { StatusCodes } = require('http-status-codes')
const {LikeService} = require('../services')

async function toggleLike(req,res){
    try {
        console.log(req.body);
        const response = await LikeService.toggleLike(req.body.modelId,req.body.modelType,req.body.userId)
        return res.status(StatusCodes.OK).json(response)
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

module.exports = {
    toggleLike
}