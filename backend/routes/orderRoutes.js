import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import {
  protect,
  admin,
  admin_or_seller,
} from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, admin_or_seller, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router
  .route('/:id/deliver')
  .put(protect, admin_or_seller, updateOrderToDelivered)

export default router
