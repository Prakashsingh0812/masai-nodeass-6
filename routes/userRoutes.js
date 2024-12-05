const express = require('express');
const { addUser, filterUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/', addUser);
router.get('/', filterUsers);

module.exports = router;
