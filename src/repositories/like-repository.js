const {Like}  = require('../models')
const CrudRepository = require('./crud-repository')

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }

    async findByUserAndLikeable(data){
        try{
            const like  = await Like.findOne(data)
            return like;
        }catch{
            throw(error)

        }
    }

}

module.exports = LikeRepository