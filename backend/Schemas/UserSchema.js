const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

const SignUp = mongoose.model("userData", SignUpSchema);

module.exports = SignUp;
