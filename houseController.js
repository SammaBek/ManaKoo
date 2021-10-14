exports.getAllHouses = (req, res) => {
  console.log("Hello");

  res.status(200).json({ status: "success", message: "Hello From here" });
};
