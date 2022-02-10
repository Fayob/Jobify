import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please input your name"],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "provide at least 6 values"],
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 30,
    default: "lastName",
  },
  location: {
    type: String,
    trim: true,
    maxlength: 30,
    default: "my city",
  },
});

UserSchema.pre("save", async function () {
  // console.log(this.modifiedPaths());
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (incomingPassword) {
  const isMatch = await bcrypt.compare(incomingPassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
