const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const userController = require("./controllers/user")
const courseController = require("./controllers/course")
application.use(bodyParser.urlencoded({
    extended: true
}));

application.get("/", (req, res) => {
    res.send('<h1>Hello World!</h1>')
});

application.use("/course", courseController);

application.use("/user", userController);

application.listen("3000", ()=>{
    console.log("Server Started")
})