const express = require('express');
const router = express.Router();
const {
    addOrder,
    updateOrder,
    deleteOrder,
    getSingleOrderInfo,
    getAllOrder,
    getOrderIncome
} = require('../controllers/OrderController')

// create Order
router.post('/Order/addNew', addOrder)

// Update Order
router.put('/Order/update/:userId', updateOrder)

// Delete Order
router.delete('/Order/deleteOrder/:id', deleteOrder)

// Get Single Order
router.get('/Order/getSingleOrder/:id', getSingleOrderInfo)

// Get All Order Items
router.get('/Order/', getAllOrder)

// get Monthly Income
router.get('/income/', getOrderIncome)

module.exports = router;