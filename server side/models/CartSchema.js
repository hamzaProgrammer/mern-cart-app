const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
        {
        title: {
            type : String,
            required: true,
            unique: true
        },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ]
    },
    {
        timestamps: true
    }
);


const Cart = mongoose.model('CART', CartSchema);

module.exports = Cart