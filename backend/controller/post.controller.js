const User = require('../model/User.model.js');
const Post = require('../model/Post.model.js');
const Comment = require('../model/Comment.module.js')

const postControll = {
    async getAllPost(req, res){
         console.log(req.user);
        //  return res.status(400).json({message:"sry bby"})
        try {
            const posts = await Post.find({}).populate('owner');
            console.log(posts);
            res.status(200).json({posts});
        } catch (error) {
            console.log("error is ", error);
            res.status(401).json({message:"internal server error"});
        }
    },


  async create(req, res){
    
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message:"fill all the details", success:false})
        }
        const user = req.user;
        try {
         
            const post = new Post({
                 title,
                 content,
                 owner:user._id
            })

            const savedPost = await post.save();

            res.status(200).json({message:"post created succesfully", success:true});

        } catch (error) {
            console.log("error is ", error);
            res.status(401).json({message:"internal server error", success:false});
        }  
    },

    async updateLike(req, res){

        const {id:postId} = req.params;
        const user = req.user;
       
        console.log(postId)
        try {
            const post = await Post.findOne({_id:postId});
            console.log(post)
            if(!post){
                return res.status(400).json({message:"post not found"})
            }

            const alreadyLiked = post.likes.includes(user._id);

            if(alreadyLiked){
              post.likes = post.likes.filter( id => id.toString() !== user.id);
            }else{
                post.likes.push(user._id);
            }

            await post.save();
               res.status(200).json({ 
                message: alreadyLiked ? "Post unliked" : "Post liked",
                likesCount: post.likes.length,
                });
        } catch (error) {
            console.log("error is ", error)
            res.status(500).json({ message: "Error toggling like" });

        }

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