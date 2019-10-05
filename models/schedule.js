var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ObjectId = Schema.ObjectId;

var scheduleSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Schedule', scheduleSchema);
