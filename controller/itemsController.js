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
    }
}
