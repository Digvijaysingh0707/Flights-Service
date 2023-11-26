const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-route");
const airportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);
router.use("/cities", cityRoutes);
router.use("/flights", flightRoutes);
router.get("/info", InfoController.info);

module.exports = router;
