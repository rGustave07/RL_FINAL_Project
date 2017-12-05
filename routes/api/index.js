const router = require("express").Router();
const infoRoutes = require("./info.js");
const itemsRoutes = require("./items.js");

router.use("/info", infoRoutes);
router.use("/items", itemsRoutes);

module.exports = router;
