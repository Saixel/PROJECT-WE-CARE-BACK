const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Theres already a user with this email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'professional', 'admin'],
    default: 'user',
  },
  name: String,
  phone: Number,
  image: String,
  description: String,
  collective: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'collectives',
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  ],
  createdActivities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'activities',
    },
  ],
  createdPacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'packages',
    },
  ],
  purchasedPacks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'packages',
    },
  ],
})

exports.User = mongoose.model('users', userSchema)
