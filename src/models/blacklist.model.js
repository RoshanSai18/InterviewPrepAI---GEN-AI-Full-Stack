const mongoose = require("mongoose")

const blackListTokenSchema = mongoose.Schema({
    token: String,
    required: [true, "Token is required for blacklisting"]

}, {
    timestamps: true
})


const tokenBlacklistModel = mongoose.model("blacklistTokens", blackListTokenSchema)

module.exports = tokenBlacklistModel;
