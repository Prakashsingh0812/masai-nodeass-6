const express = require('express');
const { addCourse, filterCourses } = require('../controllers/courseController');

const router = express.Router();

router.post('/', addCourse);
router.get('/', filterCourses);

module.exports = router;
