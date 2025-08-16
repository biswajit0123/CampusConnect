
const Comment = require('../model/Comment.module.js')
const Post= require('../model/Post.model.js')


const createComment = async (req, res) => {
    const {id:postId} = req.params;
    const user = req.user;

    const{content} = req.body;
  if(!content){
    return res.status(400).json({message:"there is no comment"})
  }
    try {
        const comment =await new Comment({
            content,
            owner:user._id
        })
      //find post and push the comment id to comment [] feild in post schema

      const post= await Post.findById(postId);
      const savedComment = await comment.save();
      post.comment.push(savedComment._id);
      await post.save();
      res.status(200).json({message:"created succesfully"});
    } catch (error) {
       console.log("error is", error);
       res.status(201).json({message:"internal server error"}); 
    }
}

const deleteComment = async (req, res) => {
      const {commentId, postId} = req.params;
      const user = req.user;

      try {
        
        const comment  = await Comment.findOne({_id:commentId});
        if(!comment){
                return res.status(404).json({ message: "Comment not found" });
        }
      if (comment.owner.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this comment" });
         }

        await Post.findByIdAndUpdate(postId, { $pull: { comment: comment._id } });
      await Comment.findByIdAndDelete(commentId);
    res.status(200).json({ message: "Comment deleted successfully" });



      } catch (error) {
        console.log("error is" , error)
        res.status(500).json({ message: "Internal server error" });

      }
      
}

module.exports = {
    createComment,
    deleteComment
}