const express = require("express");
const houseController = require("./houseController");
const router = express.Router();

router.route("/").get(houseController.getAllHouses);

module.exports = router;
