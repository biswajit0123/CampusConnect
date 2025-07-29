const User = require('../model/User.model.js');
const Post = require('../model/Post.model.js');

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
    
        const {userId,title, content} = req.body;
        try {
            const user = await User.findOne({_id:userId});
            if(!user){
                return res.status(201).json({message:"log in first"});
            }
            
            const post = new Post({
                 title,
                 content,
                 owner:user._id
            })

            const savedPost = await post.save();

            res.status(200).json({post:savedPost});

        } catch (error) {
            console.log("error is ", error);
            res.status(401).json({message:"internal server error"});
        }  
res.status(200).json({message:"create post"})
    },
      async delete(req, res){
res.status(200).json({message:"deleted post"})
    },
}

module.exports = postControll;