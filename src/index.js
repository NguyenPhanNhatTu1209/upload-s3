require("dotenv").config();
const express = require("express");
const app = express();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const route = require("./Routes");
route(app);
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App listening at http://localhost`, port);
  });