const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  days: [String],
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  schedule: scheduleSchema,
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
