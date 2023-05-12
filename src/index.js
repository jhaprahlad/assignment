const express = require("express")
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const route = require("./routes/route.js");
const app = express();
const PORT = 3200;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
    .connect(
        "mongodb+srv://jhaprahlad:mEG8wRQKwJidfdq2@cluster0.qqlks75.mongodb.net/middleware-2-assignment?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));


    app.use("/", route);

    app.listen(PORT, function () {
        console.log("app is running at port no. " + PORT);
    });





