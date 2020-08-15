const express = require('express');
const app = express();
let setupMiddleware = require('./middleware/commonMiddleware');
let apiRouter = require('./api/index');
const mongoose = require('mongoose');

  // DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
 

setupMiddleware(app);

app.use('/api/', apiRouter);
  
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server up and running on port ${port}`));

module.exports = app;