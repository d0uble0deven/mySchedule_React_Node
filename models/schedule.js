const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var scheduleSchema = new Schema({
    name: String,
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    details: String,
    userId: String,
})

module.exports = mongoose.model('Schedule', scheduleSchema)