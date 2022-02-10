import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: [50, "Name must not exceed 50 characters"],
    },
    position: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: [100, "Name must not exceed 20 characters"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "remote"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my-city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
