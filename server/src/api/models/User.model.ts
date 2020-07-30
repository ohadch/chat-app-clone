const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    nickname: {type: String, unique: true},
    status: {type: String, default: ""},
    lastSeen: String,
    isOnline: {type: Boolean, default: false}
});


userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
}

module.exports = mongoose.model("User", userSchema, "users")