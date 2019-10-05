var mongoose = require('mongoose');
// var ObjectId = Schema.ObjectId;
var Schema = mongoose.Schema;

// var userSchema = new Schema({
//     name: String,
//     email: String,

// });

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, lowercase: true, unique: true },
    password: String
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);