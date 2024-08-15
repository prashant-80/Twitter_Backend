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
})

const Tweet = mongoose.model('Tweet',tweetSchema);

module.exports = Tweet



