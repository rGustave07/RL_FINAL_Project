"use strict"

const path = require("path");
const fs = require("fs");
const parse = require('csv-parse/lib/sync');
const basename = path.basename(__filename);
const mongoose = require('mongoose');
const iC = require('../../../controller/itemsController');

// const dir = path.join(__dirname, "./public/assets/csv");
const dir = __dirname;

let data = {
    category: null,
    itemName: null
};

let dataArr = [];

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/rlitems', { useMongoClient: true });

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
  // iC.additem({category: "this ish", itemName: "test"});
  let fileNames = fs.readdirSync(dir, {
      encoding: 'utf-8'
    })
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-4) === '.csv')
    });

  fileNames.forEach(file => {
    data.category = file.replace(".csv", "");
    let items = fs.readFileSync(path.join(dir, file), {encoding: 'utf-8'}).split('\n');
    items.map( item => {
        data.category = file.replace(".csv", "");
        data.itemName = item.slice(0,item.length-1);
        console.log(data);
        // Succesfully getting data returned, start seeding DB
        iC.additem(data);
    });
  });
});
