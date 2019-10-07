var Schedule = require('../models/schedule');

module.exports = {
    create,
    // highScores
};

async function index(req, res) {
    const schedules = await Schedule.find({});
    res.status(200).json(schedules);
}

async function show(req, res) {
    const schedule = await Schedule.findById(req.params.id);
    res.status(200).json(schedule);
}

async function create(req, res) {
    const schedule = await Schedule.create(req.body);
    res.status(201).json(schedule);
}


async function deleteOne(req, res) {
    const deletedSchedule = await Schedule.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedSchedule);
}

async function update(req, res) {
    const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedSchedule);
}

// async function create(req, res) {
//     console.log('user: ', req.user)
//     try {
//         await Schedule.create(req.body);
//         // Use the highScores action to return the list
//         highScores(req, res);
//     } catch (err) {
//         res.json({ err });
//     }
// }




// async function highScores(req, res) {
//     const schedules = await Schedule.find({})
//     // .sort({ numGuesses: 1, seconds: 1 })
//     // // Default to a limit of 20 high scores
//     // // if not specified in a query string
//     // .limit(req.query.limit || 20);
//     res.json(scores);
// }