const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

require("./dbConfig/dbConfig.js")

const {indexRouter} = require("./router/indexRouter");
app.use("/",indexRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
