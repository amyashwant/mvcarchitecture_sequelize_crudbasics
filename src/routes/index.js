const express = require("express");
const router = express.Router();
const scd = require("./v1");

router.use("/v1", scd);

module.exports = router;
