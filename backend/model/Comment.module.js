
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        type:String,
        required:true
    }
})


const Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;