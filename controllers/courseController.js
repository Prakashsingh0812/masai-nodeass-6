const Course = require('../models/Course');

// Add a course
const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Filter courses
const filterCourses = async (req, res) => {
  try {
    const { title, instructor } = req.query;
    const query = {};
    if (title) query.title = title;
    if (instructor) query.instructor = instructor;

    const courses = await Course.find(query);
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addCourse, filterCourses };
