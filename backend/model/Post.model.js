

const mongoose = require('mongoose')
const Comment = require('../model/Comment.module')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    comment:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Comment"
    }],
     likes:[{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
}, {timestamps:true})


//delete comment after the post deleted
postSchema.post('findOneAndDelete', async (singlepost)=>{
      console.log("MIDDLEWARE TRIGGERED", singlepost);
    if(singlepost){
    await Comment.deleteMany({_id: {$in : singlepost.comment}})
}
})


const Post = mongoose.model("Post", postSchema);
module.exports = Post;