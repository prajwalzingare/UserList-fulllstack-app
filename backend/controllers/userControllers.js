/* This file is all about logic that we have to build for our application */

//heare we require user model which we created using mongoose model and schema for the use of creating new user finding it deleting it and getting the user from collection.
const User = require("../models/userModel");

//controller logic start from hear.we are writing logic/controllerss to transfer to router folder.

//home router and its logic.
const home = (req, res) => {
  res.send("hello prajwal");
  // console.log(req.body);
};

/*logic for creating user and that we will transfer to router for further transmission.*/

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(req.body);
    if (!name || !email) {
      throw new Error("Name and Email are Required");
    }
    const UserExits = await User.findOne({ email });
    if (UserExits) {
      throw new Error("Email already Exists");
    }
    //Inserting into database we can also use insertMany method.
    const user = User.create({ name, email });
    res.status(201).json({
      sucess: true,
      message: "User creted Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
  //for checking the method of request.
  console.log(req.method);
};

//logic for getuser, how to fetch user from database

const getUser = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json({
      sucess: true,
      Users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      sucess: false,
      message: error.message,
    });
  }
};

//logic for edit user
const editUser = async (req, res) => {
  // console.log(req.params.id);
  console.log(req.body);
  try {
    //req.body is bringing all data from database.
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
  console.log(req.method);
};

//logic for delete user

const deleteUser = async (req, res) => {
  try {
    // console.log(req.params.email);
    // console.log(req.params.id);
    // console.log(req.body);

    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

/* Exporting the module for using in routers */

module.exports = { home, createUser, getUser, editUser, deleteUser };
