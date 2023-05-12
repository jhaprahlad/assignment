const express = require("express");
const bodyParser = require("body-parser");
const route = require("../routes/route.js");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 3100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect(
        "mongodb+srv://jhaprahlad:mEG8wRQKwJidfdq2@cluster0.qqlks75.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));

app.use(function (req, res, next) {
    var currentdate = new Date();
    var datetime =
        " the reusult is " + currentdate.getDate() +
        " " +
        (currentdate.getMonth() + 1) +
        " " +
        currentdate.getFullYear() +
        " " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
    let ip = req.ip;
    let url = req.originalUrl;
    console.log(`${datetime} ${ip} ${url}`);
    next();
});
app.use("/", route);

app.listen(PORT, function () {
    console.log("app is running at port no. " + PORT);
});
