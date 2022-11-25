const Store = require("../models/Store");

// @desc Get all stores
// @routes GET /api/v1/stores
// @access Public
exports.getStore = async (req, res, next) => {
  try {
    const stores = await Store.find();

    return res
      .status(200)
      .json({ success: true, count: stores.length, data: stores });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: "Server Error" });
  }
};

// @desc Create a stores
// @routes POST /api/v1/stores
// @access Public
exports.addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);

    return res.status(200).json({ success: true, data: store });
  } catch (error) {
    console.error(error);

    if (error.code === 11000) {
      res.status(400).json({ error: "The ID is already exists" });
    }

    return res.status(500).json({ error: "Server Error" });
  }
};
