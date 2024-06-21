const { StatusCodes } = require('http-status-codes')
const {UserService} = require('../services')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function signup(req,res){
    try {
        const response = await UserService.signup(req.body)
        SuccessResponse.data = response
        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        console.log(error)
        throw(error)
    }

}

async function signin(req,res){
    try {
        const response = await UserService.signin(req.body)
        SuccessResponse.data = response
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(SuccessResponse)
    } catch (error) {
        console.log(error)
        throw(error)
    }
}


module.exports = {
    signup,
    signin
}