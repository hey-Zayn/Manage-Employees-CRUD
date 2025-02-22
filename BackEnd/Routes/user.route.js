const express = require("express");
const router = express.Router();
const {createUser, getUser, updateUser, deleteUser} = require("../Controller/user.controller")

router.get('/get',getUser); // Get All Users
router.post('/create',createUser); // Create User
router.put('/update/:id',updateUser); // Update User
router.delete('/delete/:id',deleteUser); // Delete User

module.exports = router