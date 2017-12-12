const router = require("express").Router();
const infoRoutes = require("./info.js");
const itemsRoutes = require("./items.js");
const gasInfo = require("./gas");

router.use("/info", infoRoutes);
router.use("/items", itemsRoutes);
router.use("/gasinfo", gasInfo);

module.exports = router;
