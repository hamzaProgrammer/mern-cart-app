const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
        {
        title: {
            type : String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type : String,
            required: true,
        },
        size: {
            type : String,
            required: true,
        },
        color: {
            type: Array,
            required: true,
        },
        price: {
            type: Array,
            required: true,
        },
        categotries: {
            type: Array,
        },
        inStock: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);


const Products = mongoose.model('PRODUCT', ProductSchema);

module.exports = Products