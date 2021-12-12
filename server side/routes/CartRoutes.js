const express = require('express');
const router = express.Router();
const {
    addCart,
    updateCart,
    deleteCartItem,
    getSingleCartInfo,
    getAllCart
} = require('../controllers/CartController')

// create Cart
router.post('/cart/addNew', addCart)

// Update Cart
router.put('/cart/update/:userId', updateCart)

// Delete Cart
router.delete('/cart/deleteCart/:id', deleteCartItem)

// Get Single Cart
router.get('/cart/getSingleCart/:id', getSingleCartInfo)

// Get All cart Items
router.get('/cart/', getAllCart)

module.exports = router;