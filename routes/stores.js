const express = require("express");

const { getStore, addStore } = require("../controller/stores");

const router = express.Router();

router.route("/").get(getStore).post(addStore);

module.exports = router;
