const db = require('../models');
const path = require('path');


module.exports = (app) => {
	  
  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../public/index.html"));
  });

}
