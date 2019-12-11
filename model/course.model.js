const mongoose = require("mongoose");

var CourseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: "Required"
    },
    courseID: {
        type: String
    },
    courseDuration: {
        type: String
    },
    courseFee: {
        type: String
    },
    departmentName:{
        type: String
    }
}, {collection: 'course'});

mongoose.model("Course", CourseSchema)