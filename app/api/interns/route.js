import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/app/lib/mongodb";
import Interns from "@/app/models/interns";

export async function POST(req) {
  const {
    fullname,
    email,
    university,
    linkedIn,
    expertise,
    technologies,
    message,
  } = await req.json();

  try {
    await connectDB();
    await Interns.create({
      fullname,
      email,
      university,
      linkedIn,
      expertise,
      technologies,
      message,
    });
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({
        msg: errors,
        success: false,
      });
    }
  }
}
