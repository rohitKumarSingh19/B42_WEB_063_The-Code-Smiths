import express from 'express';
import { getUserOrders, updateOrderStatus } from '../controllers/orderController.js'
import authMiddleware from "../middleware/authMiddleware.js";
const router=express.Router();
router.post("/create",authMiddleware,createOrder);
router.get('/',authMiddleware,getUserOrders);
router.put("/:orderId",authMiddleware,updateOrderStatus);
export default router;