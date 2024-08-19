const { StatusCodes } = require('http-status-codes')
const {CommentService} = require('../services')

async function Comment(req,res){
    try {
        console.log(req.body);
        console.log(req.body);
        const response = await CommentService.addComment(req.body.modelId,req.body.modelType,req.body.userId,req.body.content)
        return res.status(StatusCodes.OK).json(response)
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

module.exports = {
    Comment
}