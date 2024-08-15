const mongoose = require('mongoose')
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    tweets:[{
        type:mongoose.Schema.ObjectId
    }],
    name:{
        type:String
    }
})

userSchema.pre('save',function(next){
    const user = this
    const saltRounds = 10;
    const myPlaintextPassword = user.password
    const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    user.password = hash
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User