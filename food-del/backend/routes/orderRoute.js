import express from 'express'
import authMiddleware from "../middleware/auth.js"
import { placeOrder, userOrders, verifyOrder } from '../controllers/orderController.js'


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userOrders",authMiddleware,userOrders)

export default orderRouter