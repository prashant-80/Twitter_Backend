const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    noOfRetweets:{
        type:Number
    },

    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
        }
    ],
    likes:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
        }
    ],
    image:{
        type:String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
})

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet



