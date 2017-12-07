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

    additem: (req, res) => {
        db.Item
          .create()
          .then( () => {
              // console.log('success');
          })
    },

    finditem: (req, res) => {
        db.Item
          .find({category: req.params.name})
          .then( data => {
              res.json(data);
              console.log("success");
              console.log(req.params.name);
          })
    },

    findCategory: (req, res) => {
        db.Item
          .find({category: req.params.name})
          .then( data => {
              // res.json(data);
              console.log("success", req.params.name);
              console.log(data);
          })
    }
}
