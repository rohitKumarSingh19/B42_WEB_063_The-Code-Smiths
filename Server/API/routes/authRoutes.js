import express from 'express';
import {registerUser,loginUser,logoutUser} from '../controllers/authController.js';
import {verifyToken} from '../middleware/authMiddleware.js';
const router=express.Router();
//Register route
router.post("/register",registerUser);
//Login route
router.post('/login',loginUser);
//logout route
router.post('/logout',logoutUser);
//Protected route -Get user profile
router.get('/profile',verifyToken,(req,res)=>{
    res.json({message:'Welcome to your profile!',user:req.user});
})
export default router;