const {UserRepository} = require('../repositories')
const userRepository = new UserRepository()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


async function signup(data){
    try {
        const user = await userRepository.create(data)
        return user;
    } catch (error) {
        console.log(error)
        throw(error)
    }
}



async function signin(data){
    try {
        
        const user = await userRepository.findByEmail(data.email)
        console.log(user[0])
        if(!user){
            console.log('first signup to signin')
        }
        console.log(user[0].password) //encrypted password
        console.log(data.password) //user entered password
        console.log(user[0]._id);
        const plainPassword = data.password;
        const encryptedPassword = user[0].password;
        const isMatched =  bcrypt.compareSync(plainPassword,encryptedPassword)
        console.log(isMatched);
        if(isMatched){ //issuing jwt token
            return jwt.sign({
                id:user[0]._id,
                email:data.email
            },'twitter_secret',{expiresIn:'2h'});
        }
        throw(error);
        //data.password
        //user.password  //compare 
    } catch (error) {
        console.log(error)
        throw(error)
    }

}

module.exports={
    signup,
    signin
}