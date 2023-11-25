import mongoose from "mongoose";
const { Schema } = mongoose;
 
const postSchema = new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
      },
      title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      writer:{
        type: String,
        required: true,
      },
      comments:[
        {
            message:{
                type: String,
                required: true,
            },
            commentwriter:{
                type: String,
                required: true,
            },
            commentdate: {
                type: Date,
                default: Date.now,
              },
        }
      ],
      date: {
        type: Date,
        default: Date.now,
      },

});

const Post = mongoose.model("Post", postSchema);
export default Post;
