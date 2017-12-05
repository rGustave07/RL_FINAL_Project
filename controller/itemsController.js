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
          .create(entry)
          .then( () => {
              console.log('success');
          })
    },

    finditem: (entry) => {
        db.Item
          .find({})
          .then( (data) => {
              return data;
              console.log(data);
          })
    }
}
