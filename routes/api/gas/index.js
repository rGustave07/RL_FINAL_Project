const router = require("express").Router();
const gasRoute = require('./gas');

router.use("/gas", gasRoute);

module.exports = router;
