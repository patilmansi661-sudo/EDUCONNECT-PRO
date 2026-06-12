const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  college: String,

  bio: String,

  skills: [
  {
    name: String,

    endorsements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  }
  ],

  role: {
  type: String,
  default: "user"
  },

  education: [String],

  certificates: [String],

  resume: String,

  profilePicture: String,

  // Connections Module
  connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]

}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);