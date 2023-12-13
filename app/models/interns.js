import mongoose, { Schema } from "mongoose";

const internsSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
    maxLength: [50, "Name cannot be more than 50 characters"],
    minLength: [2, "Name must be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Please enter a valid email address",
    ],
    trim: true,
    maxLength: 50,
  },
  university: {
    type: String,
    required: [true, "Please enter your university"],
    trim: true,
    maxLength: [100, "University cannot be more than 100 characters"],
    minLength: [2, "University must be at least 2 characters long"],
  },
  linkedIn: {
    type: String,
    required: [true, "Please enter your LinkedIn profile"],
    trim: true,
    maxLength: [100, "LinkedIn profile cannot be more than 100 characters"],
    minLength: [10, "LinkedIn profile must be at least 10 characters long"],
  },
  expertise: {
    type: String,
    required: [true, "Please enter your expertise"],
    trim: true,
    maxLength: [100, "Expertise cannot be more than 100 characters"],
    minLength: [2, "Expertise must be at least 2 characters long"],
  },
  technologies: {
    type: String,
    required: [true, "Please enter your technologies"],
    trim: true,
    maxLength: [100, "Technologies cannot be more than 100 characters"],
    minLength: [2, "Technologies must be at least 2 characters long"],
  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
    trim: true,
    maxLength: [500, "Message cannot be more than 500 characters"],
    minLength: [10, "Message must be at least 10 characters long"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Interns =
  mongoose.models.Interns || mongoose.model("Interns", internsSchema);

export default Interns;
