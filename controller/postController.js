import Post from "../models/Posts.js";
import User from "../models/User.js";

export const createPost = async(req, res) => {
  try {
    const{title,message}=req.body;
    
    const newPost = await Post.create({
        user:req.user.id,
        title: title,
        message: message,
        writer:req.user.name,
    });

    

    return res.json({message:"New post created successfully"});

  } catch (error) {
    return res.status(error.statusCode).json({error:error.message});
  }

};
export const createPostComment = async (req, res) => {
    try {
        const {message,postId}=req.body;
        
        const newComment ={
            message: message,
            commentwriter:req.user.name,
        }

        const post = await Post.findById(postId);

        if(!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push(newComment);
        const updatedpost = await post.save();
        return res.json({message:"Updated successfully",updatedpost});

        
    } catch (error) {
        return res.json({message:"Internal Server Error",error:error.message});
    }
    
};


export const fetchAllPost = async(req, res) => {
    try {
        const posts = await Post.find();
        return res.json(posts);
        
    } catch (error) {
        return res.json({message:"Internal Server Error",error:error.message});
    }
     
};
