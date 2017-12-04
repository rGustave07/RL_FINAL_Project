const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/rlitems",
  {
    useMongoClient: true
  }
);

mongoose.connection.on('connected', function(){
  console.log('mongoose is connected');
});

mongoose.connection.on('error', function(err) {
   console.log('error: ', err);
});



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
