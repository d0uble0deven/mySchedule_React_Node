const mongoose = require('mongoose');
const ObjectId = Schema.ObjectId;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,

});


module.exports = mongoose.model('User', userSchema);