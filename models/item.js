const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: { type: String, required: true },
    itemName: { type: String, required: true }
})

const Item = mongoose.model("items", itemSchema);

module.exports = Item;
