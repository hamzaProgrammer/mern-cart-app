const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema(
        {
        username: {
            type : String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type : String,
            required: true,
        },
        img: {
            type: String
        }
    },
    {
        timestamps: true
    }
);


const Users = mongoose.model('USERS', UserSchema);

module.exports = Users