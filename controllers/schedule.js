var Schedule = require("../models/schedule");

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
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
  console.log(req.body);
  const schedule = await Schedule.create(req.body);
  res.status(201).json(schedule);
}

async function deleteOne(req, res) {
  const deletedSchedule = await Schedule.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedSchedule);
}

async function update(req, res) {
  const updatedSchedule = await Schedule.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedSchedule);
}
