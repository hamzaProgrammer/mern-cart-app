const Order = require('../models/OrderSchema')
const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');


// create Order
const addOrder = async(req,res) => {
    const newOrder = new Order(req.body)

    try {
        await newOrder.save();

        res.status(201).json({
            newOrder
        })
    } catch (error) {
        console.log("Error in addOrder and error is : ", error)
    }
}

// Updating Order Info
const updateOrder = async (req, res) => {
    const { userId } = req.params;

    //if (req.userId){
        try {
            const updatedOrder = await Order.findByIdAndUpdate(userId ,{ $set: req.body } , {new: true} )

            res.status(201).json({updatedOrder , message: ''})
        } catch (error) {
            res.status(201).json({ message: '!!! Opps An Error Occured !!!'})
            console.log("Error in updateOrder and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
    //}

}

// Deleteing Order
const deleteOrder = async (req, res) => {
    const { id } = req.params;

    //if (req.userId){

        try {
            await Order.findByIdAndDelete(id)

            res.status(201).json({message: "Order  has been DELETED"})
        } catch (error) {
            console.log("Error in deleteOrder and error is : ", error)
        }
    //}else{
        //res.status(404).json({message: "You Are Not Allowed to Delete Your Admin" })
    //}

}


// Getting Single  Order
const getSingleOrderInfo = async (req ,res) => {
    const { id } = req.params;

    //if (req.userId === id || req.isAdmin){

        try {
            const gotOrder = await Order.find({_id: id})

            res.status(201).json({gotOrder})
        } catch (error) {
            console.log("Error in getSingleOrderInfo and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Delete Your Account" })
    //}

}


// Getting All  Order
const getAllOrder = async (req, res) => {
    //if (req.userId === id || req.isAdmin){

        try {
            const gotOrders = await Order.find()

            res.status(201).json({allOrders : gotOrders })
        } catch (error) {
            console.log("Error in getAllOrder and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Delete Your Account" })
    //}

}

// get Monthly Income
const getOrderIncome = async (req,res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { $gte : prevMonth}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                    sales: "$amount"
                },
                $group : {
                    _id: "$month",
                    total : { $sum : "$sales"}
                }
            }
        ])

        res.json(income)
    } catch (error) {
        console.log("Error in getOrderIncome and error is : " , error)
    }
}


module.exports = {
    addOrder,
    updateOrder,
    deleteOrder,
    getSingleOrderInfo,
    getAllOrder,
    getOrderIncome
}