const User = require('../model/User.model.js');
const Post = require('../model/Post.model.js');
const Comment = require('../model/Comment.module.js')

const postControll = {
    async getAllPost(req, res){
         
        try {
            const posts = await Post.find();
            console.log(posts);
            res.status(200).json({posts});
        } catch (error) {
            console.log("error is ", error);
            res.status(401).json({message:"internal server error"});
        }
    },


  async create(req, res){
    
        // const {title, content} = req.body;
        // try {
         
            
        //     // const post = new Post({
        //     //      title,
        //     //      content,
        //     //      owner:user._id
        //     // })

        //     const savedPost = await post.save();

        //     res.status(200).json({post:savedPost});

        // } catch (error) {
        //     console.log("error is ", error);
        //     res.status(401).json({message:"internal server error"});
        // }  
res.status(200).json({message:"create post"})
    },

    
    async delete(req, res){
      const {id} = req.params;

      try {
              await Post.findByIdAndDelete(id);
res.status(200).json({message:"deleted succesfully"})
      } catch (error) {
        console.log("error occure", error);
        res.status(402).json({message:"internal server error"})
      }

    },
}

module.exports = postControll;