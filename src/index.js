const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const route = require("../src/queryparams/voting ");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", route);

const PORT = 6000;

app.listen(PORT, function (req, res) {
  console.log("app is running at port number :- " + PORT);
});
