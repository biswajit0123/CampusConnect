
const Comment = require('../model/Comment.module.js')
const Post= require('../model/Post.model.js')


const createComment = async (req, res) => {
    const {id:postId} = req.params;
    const{userId, content} = req.body;

    try {
        const comment =await new Comment({
            content,
            owner:userId
        })
      //find post and push the comment id to comment [] feild in post schema

      const post= await Post.findById(postId);
      const savedComment = await comment.save();
      post.comment.push(savedComment._id);
      await post.save();
      res.status(200).json({comment:savedComment});
    } catch (error) {
       console.log("error is", error);
       res.status(201).json({message:"internal server error"}); 
    }
}

const deleteComment = async (req, res) => {

}

module.exports = {
    createComment,
    deleteComment
}