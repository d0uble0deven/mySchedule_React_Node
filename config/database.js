var mongoose = require('mongoose');

// update :id after '/myschedule'
mongoose.connect('mongodb://localhost:27017/myschedule',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    }
)



var db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
