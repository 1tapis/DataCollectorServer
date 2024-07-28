const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
} = require("../Controller/userController");

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);


module.exports = {
    userRouter
};
