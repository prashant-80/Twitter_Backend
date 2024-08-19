const {Tweet}  = require('../models')
const CrudRepository = require('./crud-repository')

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet)
    }

    async get(id) {
        try {
            const response = await Tweet.findById(id).populate('user').populate('comments').populate('likes').exec();
            if (!response) {
                console.log(`No record found with ID: ${id}`);
                return null;
            }
            return response;
        } catch (error) {
            console.error(`Error fetching record with ID: ${id}`, error);
            throw error; 
        }
    }
}

module.exports = TweetRepository