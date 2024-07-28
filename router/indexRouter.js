const express = require("express")
const indexRouter = express.Router();
const {userRouter} = require("./userRouter");

indexRouter.use("/api/users",userRouter);

module.exports = {
    indexRouter
}