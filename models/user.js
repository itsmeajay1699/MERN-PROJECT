const mongoose = require("mongoose");
const { Schema } = mongoose;

// sub schema for address

// nest area schema

const areaSchema = new Schema({
  city: {
    type: String,
    required: [true, "why no area name"],
  },
  state: {
    type: String,
    required: [true, "why no pincode"],
  },
});

let validatePhone = function (phone) {
  var re = /^\d{10}$/;
  return re.test(phone);
};

const addressSchema = new Schema({
  pincode: {
    type: Number,
    required: [true, "why no pincode"],
  },
  street: {
    type: String,
    required: [true, "why no street"],
  },
  phone: {
    type: Number,
    validate: [validatePhone, "Please fill a valid phone number"],
    required: [true, "why no phone"],
  },
  area: {
    type: areaSchema,
    required: [true, "why no area"],
  },
});

// email validation

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema({
  firstName: {
    type: String,
    min: [0, "Too few Letters"],
    max: [20, "So large Name"],
    required: [true, "why no name"],
  },
  lastName: {
    type: String,
    min: [0, "Too few Letters"],
    max: [20, "So large Name"],
    required: [false],
  },
  age: {
    type: Number,
    min: [12, "You are too young age should be more than 12"],
    max: [100, "you are soon to be dead"],
  },
  email: {
    type: String,
    required: [true, "why no email"],
    validate: [validateEmail, "Please fill a valid email address"],
  },
  address: {
    type: addressSchema,
    required: [true, "why no address"],
  },
});

exports.User = mongoose.model("User", userSchema);
