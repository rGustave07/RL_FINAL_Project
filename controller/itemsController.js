const db = require('../models');

// defining methods to control db interaction
module.exports = {
    listAll: (req, res) => {
        db.Item
          .find({})
          .then( returnModel => {
              res.json(returnModel)
          })
          .catch(err => res.status(422).json(err));
    },

    additem: (data) => {
        db.Item
          .create()
          .then( () => {
              // console.log('success');
          })
          .catch( err => {
            if (err) {
              console.log(err);
            }
          })
    },

    finditem: (req, res) => {
        db.Item
          .find({itemName: req.params.name})
          .then( data => {
              res.json(data);
              console.log(data);
          })
          .catch( err => {
              console.log("error:", err);
          })
    },

    findCategory: (req, res) => {
        db.Item
          .find({category: req.params.category})
          .then( data => {
              res.json(data);
              console.log("success", req.params.name);
              console.log(req.params);
          })
    }
}
