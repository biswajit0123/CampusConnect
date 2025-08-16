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
        const collegeName = req.user.collegeName;
        if(!title || !content){
            return res.status(400).json({message:"fill all the details", success:false})
        }
        const user = req.user;
        const imageurl ="";
        if(req.file){
            imageurl = req.file.path; // Assuming the file path is stored in req.file.path
        }

        try {
         
            const post = new Post({
                 title,
                 content,
                 owner:user._id,
                 collegeName,
                 image: imageurl,
            })

            const savedPost = await post.save();
         console.log(savedPost)
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
      
   // Controller
        async getPostById(req, res) {
            const { id: postId } = req.params;

            if (!postId) {
                return res.status(400).json({ message: "Post ID is required" });
            }
            console.log(postId)
            try {
                // const post = await Post.findById(postId).populate('owner').populate('comment');

                const post = await Post.findById(postId)
                        .populate('owner')
                        .populate({
                            path: 'comment',
                            populate: {
                            path: 'owner', // the field inside each comment
                            model: 'User'  // optional if Mongoose can infer it
                            }
                        });
                if (!post) {
                    return res.status(404).json({ message: "Post not found" });
                }

                res.status(200).json({ success: true, post });
            } catch (error) {
                console.error("Error fetching post:", error);
                res.status(500).json({ message: "Server error" });
            }
        },

   async delete(req, res) {
  const { id } = req.params;
  const user = req.user;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the logged-in user owns the post
    if (post.owner.toString() !== user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to delete this post" });
    }

    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }

    },
}

module.exports = postControll;