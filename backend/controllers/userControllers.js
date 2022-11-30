const User = require("../models/userModel");
// console.log(User);

//controller logic start from hear.we are writing logic/controllerss to transfer to router folder.
//home router and its logic.
const home = (req, res) => {
  res.send("hello prajwal");
};

//logic for creating user and that we will transfer to router for further transmission.
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("Name and Email are Required");
    }
    const UserExits = await User.findOne({ email });
    if (UserExits) {
      throw new Error("Email already Exists");
    }
    //Inserting into database
    const user = User.create({ name, email });
    res.status(201).json({
      sucess: true,
      message: "User creted Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//logic for getuser

const getUser = (req, res) => {
  try {
  } catch (error) {}
};
module.exports = { home, createUser };
