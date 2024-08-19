const {Comment}  = require('../models')
const CrudRepository = require('./crud-repository')

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment)
    }
    
    async get(id) {
        return await Comment.findById(id).populate('user').exec();
    }
}

module.exports = CommentRepository