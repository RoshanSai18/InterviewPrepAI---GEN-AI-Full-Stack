const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username Already Exists!"],
        required: true,
    },

    email: {
        type: String,
        unique: [true, "Email already in use!"],
        required: true,
    },

    password: {
        type: String,
        required: true,
    }

})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;