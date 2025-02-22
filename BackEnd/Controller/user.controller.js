const userModel = require("../Model/user.model");

const createUser = async (req, res) => {
  const { name, fatherName, email, phone } = req.body;

  try {
    const newUser = await userModel.create({
      name,
      fatherName,
      email,
      phone,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error in Create User",
      err,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "404 user not found",
      });
    }
    res.status(201).json({
      success: true,
      message: "Get ALL USER",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error at Get ALL User",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, fatherName, email, phone } = req.body;

    // Check if the user exists
    const user = await userModel.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not Found!",
      });
    }

    // Update the user
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, fatherName, email, phone },
      { new: true } // Return the updated document
    );

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error at Update User",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const DelUser = await userModel.findByIdAndDelete(id);
    if (!DelUser) {
      return res.status(404).json({
        success: false,
        message: "User Not Found!",
      });
    }
    res.status(201).json({
      success: true,
      message: "User Delete Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error at DeleteUser",
    });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
