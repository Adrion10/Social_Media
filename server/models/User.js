import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  picturePath: {
    type: String,
    default: "",
  },
});
