const express = require("express");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const {readdirSync} = require("fs");
const bodyParser = require("body-parser");
require("dotenv").config();

//app con middleware express

const app = express();

//db

connectDB();

//middlewares
app.use(morgan("dev"));

app.use(express.json({limit:"2mb"}))//standard configuration
app.use(cors());

//definición del puerto de escucha

const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`))
