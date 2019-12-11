const mongoose = require("mongoose");

var ObjectId = mongoose.Schema.Types.ObjectId;

var phonesSchema = mongoose.Schema({
    type: String,
    number: {
        type: Number,
        required: true
    }
});

var emailSchema = mongoose.Schema({
    type: String,
    email: {
        type: String,
        required: true
    }
});

var addressSchema = mongoose.Schema({
    type: String,
    address:{
        houseNumber: { type: String },
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        pin: {
            type: Number,
            required: true
        }
    }
});

var contactDetailsSchema = mongoose.Schema({
    address: [addressSchema],
    email: [emailSchema],
    phones: [phonesSchema]
});

var userInformationSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 20
    },
    name: {
        fName: { type: String, required: true },
        lName: { type: String, required: true }
    },
    userID: {
        type: ObjectId
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        default: Date.now,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15
    },
    contactDetails: [contactDetailsSchema]
}, {collection: 'user'});

mongoose.model("User", userInformationSchema);