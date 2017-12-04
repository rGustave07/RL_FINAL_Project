"use strict"

const path = require("path");
const fs = require("fs");
const parse = require('csv-parse/lib/sync');
const basename = path.basename(__filename);

// const dir = path.join(__dirname, "./public/assets/csv");
const dir = __dirname;

let data = {
    category: null,
    itemName: null
};

let dataArr = [];

// fs
//   .readdirSync(dir)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-4) === '.csv');
//   })
//   .forEach(file => {
//     let category = file.replace(".csv", "");
//     let input = fs.readFileSync(path.join(dir, file), {
//       encoding: "utf-8"
//     });
//     data[category] = parse(input, { delimiter: ',' }).map(e => e[0]);
//   })

let fileNames = fs.readdirSync(dir, {
    encoding: 'utf-8'
  })
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-4) === '.csv')
  });

fileNames.forEach(file => {
  // data.category = file.replace(".csv", "");
  let items = fs.readFileSync(path.join(dir, file), {encoding: 'utf-8'}).split('\n');
  items.map( item => {
      data.category = file.replace(".csv", "");
      data.itemName = item;
      console.log(data);
      console.log(dir);
  })
})

module.exports = data;
