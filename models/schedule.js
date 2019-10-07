var mongoose = require('mongoose');
// var ObjectId = Schema.ObjectId;

var scheduleSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    people: String,
    time: String,
    location: {
        type: String,
        required: true,
    },
    notes: String,
    userId: String,
})

module.exports = mongoose.model('Schedule', scheduleSchema);
