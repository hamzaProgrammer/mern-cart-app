const Cart = require('../models/CartSchema')
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');


// create Cart
const addCart = async(req,res) => {
    const newCart = new Cart(req.body)

    try {
        await newCart.save();

        res.status(201).json({
            newCart
        })
    } catch (error) {
        console.log("Error in addCart and error is : ", error)
    }
}

// Updating Cart Info
const updateCart = async (req, res) => {
    const { userId } = req.params;

    //if (req.userId){
        try {
            const updatedCart = await Cart.findByIdAndUpdate(userId ,{ $set: req.body } , {new: true} )

            res.status(201).json({updatedCart , message: ''})
        } catch (error) {
            res.status(201).json({ message: '!!! Opps An Error Occured !!!'})
            console.log("Error in updateCart and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
    //}

}

// Deleteing Cart
const deleteCartItem = async (req, res) => {
    const { id } = req.params;

    //if (req.userId){

        try {
            await Cart.findByIdAndDelete(id)

            res.status(201).json({message: "Cart Item has been DELETED"})
        } catch (error) {
            console.log("Error in deleteCart and error is : ", error)
        }
    //}else{
        //res.status(404).json({message: "You Are Not Allowed to Delete Your Admin" })
    //}

}


// Getting Single  Cart
const getSingleCartInfo = async (req ,res) => {
    const { id } = req.params;

    //if (req.userId === id || req.isAdmin){

        try {
            const gotCart = await Cart.find({_id: id} , {password: 0 })

            res.status(201).json({gotCart})
        } catch (error) {
            console.log("Error in getSingleCartInfo and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Delete Your Account" })
    //}

}


// Getting All  Cart
const getAllCart = async (req, res) => {
    //if (req.userId === id || req.isAdmin){
        const qNew = req?.query?.new
        const qCategory = req?.query?.category

        try {
            let Carts;

            if(qNew){
                Carts = await Cart.find().sort({createdAt: -1}).limit(5);
            }else if(qCategory){
                Carts = await Cart.find({categories: {
                    $in: [qCategory]
                }});
            }else{
                Carts = await Cart.find();
            }
            const gotCarts = await Cart.find()

            res.status(201).json({allCarts : gotCarts })
        } catch (error) {
            console.log("Error in getAllCart and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Delete Your Account" })
    //}

}

module.exports = {
    addCart,
    updateCart,
    deleteCartItem,
    getSingleCartInfo,
    getAllCart
}