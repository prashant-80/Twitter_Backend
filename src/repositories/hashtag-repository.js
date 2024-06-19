const {Hashtag}  = require('../models')
const CrudRepository = require('./crud-repository')

class HashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag)
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error)
            throw(error)
        }
    }

    async getHashtagByName(text){
        try {
            const response = await Hashtag.find({text:text})
            return response;
        } catch (error) {
            console.log(error)
            throw(error)
        }
    }
}

module.exports = HashtagRepository