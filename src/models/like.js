const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    user:{
        type:mongoose.Schema.ObjectId
    },
    likeable:{
        type:mongoose.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },

})


const Like = mongoose.model('Like',likeSchema);

module.exports = Like

