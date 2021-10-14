const express = require('express');
const houseController = require('./houseController');
const router = express.Router();

router
  .route('/')
  .get(houseController.getAllHouses)
  .post(houseController.createHouse);

module.exports = router;
