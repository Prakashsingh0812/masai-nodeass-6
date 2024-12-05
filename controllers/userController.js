const User = require('../models/User');

// Add a user
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Filter users
const filterUsers = async (req, res) => {
  try {
    const { role } = req.query;

    const users = await User.find(role ? { role } : {});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addUser, filterUsers };
