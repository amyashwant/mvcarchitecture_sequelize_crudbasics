const express = require("express");
const router = express.Router();
const { infocontroller } = require("../../controllers");
const airplaneRoutes = require("./aiplane-routes");

router.use("/airplanes", airplaneRoutes);
router.get("/info", infocontroller.info);

module.exports = router;
