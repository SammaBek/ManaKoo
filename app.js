const express = require("express");
const app = express();
const houseRouter = require("./ManakooRoutes");

app.use(express.json());

app.use("/manakoo/houses", houseRouter);

module.exports = app;
