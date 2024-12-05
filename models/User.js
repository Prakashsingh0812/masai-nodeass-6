const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  bio: String,
  socialLinks: [
    {
      platform: String,
      url: String,
    },
  ],
  preferences: {
    preferredLanguage: String,
  },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['student', 'instructor'], required: true },
  profile: profileSchema,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
