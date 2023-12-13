"use client";
import { useState } from "react";
import connectDB from "@/app/lib/mongodb";
import { set } from "mongoose";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [message, setMessage] = useState("");
  const [expertise, setExpertise] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/interns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        university,
        linkedIn,
        expertise,
        technologies,
        message,
      }),
    });

    const { msg, success } = await res.json();
    console.log(msg, success);
    setErrors(msg);
    setSuccess(success);
    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
      setUniversity("");
      setLinkedIn("");
      setTechnologies("");
    }
  };

  return (
    <div className="p-3">
      <form
        className="py-4 mt-4 border-t flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value={fullname}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="id@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="university">University</label>
          <input
            type="text"
            id="university"
            placeholder="University of Lagos"
            onChange={(e) => {
              setUniversity(e.target.value);
            }}
            value={university}
          />
        </div>
        <div>
          <label htmlFor="lnkd">Link to your LinkedIn profile</label>
          <input
            type="text"
            id="lnkd"
            placeholder="Example: https://www.linkedin.com/in/johnDoe/"
            onChange={(e) => {
              setLinkedIn(e.target.value);
            }}
            value={linkedIn}
          />
        </div>
        <div>
          <label htmlFor="expertise">Main expertise</label>
          <select
            className="w-full p-2"
            type="text"
            id="expertise"
            onChange={(e) => {
              setExpertise(e.target.value);
            }}
            value={expertise}
          >
            <option>Web Development</option>
            <option>Mobile Development</option>
            <option>Business Intelligence</option>
            <option>Financial Informatics</option>
            <option>Data Science</option>
            <option>Machine Learning</option>
            <option>Artificial Intelligence</option>
            <option>Cybersecurity</option>
            <option>Cloud Computing</option>
            <option>DevOps</option>
            <option>UI/UX Design</option>
            <option>Blockchain</option>
            <option>Game Development</option>
            <option>Internet of Things</option>
            <option>Robotics</option>
            <option>Digital Marketing</option>
            <option>Content Writing</option>
            <option>Graphic Design</option>
            <option>Video Editing</option>
            <option>Animation</option>
            <option>Photography</option>
            <option>Music Production</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="techs">Technologies you worked with:</label>
          <input
            type="text"
            id="techs"
            placeholder="Example: React, Angular, Node, Spring, Express, MongoDB, DataBricks, Tableau & etc..."
            onChange={(e) => {
              setTechnologies(e.target.value);
            }}
            value={technologies}
          />
        </div>
        <div>
          <label htmlFor="message">Your motivation</label>
          <textarea
            className="h-32"
            id="message"
            rows="10"
            cols="30"
            placeholder="Type your message here, not more than 500 characters"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {errors
          ? errors.map((err) => (
              <div
                className={`${
                  success ? "text-green-800" : "text-red-600"
                } px-5 py-2`}
                key={Math.random().toString(26).slice(2)}
              >
                {err}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ContactForm;
