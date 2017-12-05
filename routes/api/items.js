const router = require('express').Router();
const axios = require('axios');
const items = require("./csv");
const iC = require('../../controller/itemsController');

function findNameMatch(name, obj) {
  let matches = [];

  for(const x in obj) {
    const reg = new RegExp(name,"i");
    matches = matches.concat(obj[x].filter(e => reg.test(e)));
  }
  return matches;
}

router.route("/category/:category")
      .get((req, res) => res.json("Success"));

router.route("/name/:name")
      .get(iC.finditem);


module.exports = router;
