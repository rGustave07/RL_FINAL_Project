const router = require("express").Router();
const infoRoutes = require("./info");
const itemsRoutes = require("./items");

console.log(itemsRoutes);

router.use("/info", infoRoutes);
router.use("/items", itemsRoutes);

module.exports = router;
