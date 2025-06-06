const SignUp = require("../models/userschema");
//create user
const createUser = async (req, res) => {
  const data = req.body;
  try {
    const userdata = new SignUp(data);
    await userdata.save();
    res.status(200).json({ message: "sign in successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "sign up error", success: false });
  }
};

//login user
const CreateLog = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await SignUp.findOne({ username: username });
    if (!user)
      return res.status(500).json({ message: "no user found", success: false });

    const isPasswordMatch = user.password === password ? true : false;
    if (isPasswordMatch) {
      return res
        .status(200)
        .json({ message: " login successfully", success: true });
    } else {
      return res
        .status(500)
        .json({ message: "incorrect password", success: false });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error", success: false });
  }
};

//update user
const updateUser = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const obj = { $set: { ...body } };
  try {
    const data = await SignUp.findByIdAndUpdate(id, obj);
    res.status(200).json({ message: "data updated ", success: true, data });
  } catch (error) {
    res.status(500).json({ message: "error updating data", success: false });
  }
};

const fetchALL = async (req, res) => {
  try {
    const data = await SignUp.find({});
    res.status(200).json({ message: "all data fetched", success: true, data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error fetching all data", success: false });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await SignUp.findByIdAndDelete(id);
    res.status(200).json({ message: "data deleted ", success: true, data });
  } catch (error) {
    res.status(500).json({ message: "error deleting data", success: false });
  }
};

module.exports = {
  createUser,
  updateUser,
  fetchALL,
  deleteUser,
  CreateLog,
};
