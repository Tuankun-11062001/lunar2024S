const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

// import dotenv
require("dotenv").config();

// import connect Mongodb
const connect = require("./db/connectDb");
connect();

// import routes
const dragonRoute = require("./routers/dragonRoute");
const userRoute = require("./routers/userRoute");

app.use("/dragon", dragonRoute);
app.use("/user", userRoute);

app.listen(3001, () => console.log("server listening on : 3001"));
