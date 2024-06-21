const {User}  = require('../models')
const CrudRepository = require('./crud-repository')

class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }

    async findByEmail(email){
        try {
            const user = await User.find({email:email})
            return user;
        } catch (error) {
            console.log(error)
            throw(error)
        }
    }
    
}

module.exports = UserRepository