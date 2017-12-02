"use strict"

const path = require("path");
const fs = require("fs");
const parse = require('csv-parse/lib/sync');
const basename = path.basename(__filename);

// const dir = path.join(__dirname, "./public/assets/csv");
const dir = __dirname;

let data = {};

fs
  .readdirSync(dir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-4) === '.csv');
  })
  .forEach(file => {
    let category = file.replace(".csv", "");
    let input = fs.readFileSync(path.join(dir, file), {
      encoding: "utf-8"
    });
    data[category] = parse(input, { delimiter: ',' }).map(e => e[0]);
  })

module.exports = data;
