const mongoose = require("mongoose");

var url = "mongodb://localhost:27017/GoodTutorialApp";

mongoose.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (!err) {
        console.log("DB connected")
    } else{
        console.log("Error ", err)
    }
})

const course = require("./course.model");
const user = require("./user.model")