const mongoose = require('mongoose');

// update :id after '/myschedule'
mongoose.connect('mongodb://localhost/myschedule', {
    useNewUrlParser: true,
    useUnifiedToplogy: true
});

var db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
