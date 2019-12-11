const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const UserModel = mongoose.model("User");

router.get("/", (req, res) => {
    UserModel.find((err, docs) => {
        if(!err){
            console.log(docs);
            res.send("User Controller");
        } else {
            console.log("Error :", err);
        }
    });
});

module.exports = router;