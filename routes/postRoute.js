import express from "express";

import {
  createPost,
  createPostComment,
  fetchAllPost,
} from "../controller/postController.js";
import { fetchuser } from "../middleware/fetchuser.js";
// import {deleteUser, forgotPassword, getAllUser, getSingleUser, getUserDetails, loginUser, logout, registerUser, resetPassword, updatePassword, updateProfile, updateUserRole} from "../controller/userController.js"
// import { isAuthenticatedUser,authorizeRoles } from "../middleware/auth.js";
const router = express.Router();

router.post("/createPost", fetchuser, createPost);
router.get("/posts", fetchAllPost);
router.post("/postcomment", fetchuser, createPostComment);

export default router;
