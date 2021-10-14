const House = require('./houseModel');

exports.createHouse = async (req, res) => {
  try {
    console.log(req.body);
    const newHouse = await House.create(req.body);
    res.status(200).json({ status: 'success', body: { house: newHouse } });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

exports.getAllHouses = async (req, res) => {
  console.log('Hello');

  res.status(200).json({ status: 'success', message: 'Hello From here' });
};
