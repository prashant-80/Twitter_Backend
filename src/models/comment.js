const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.ObjectId
    },

    comment:{
        type:String
    },

    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },

    commentable :{
        type:mongoose.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },

})
const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment

