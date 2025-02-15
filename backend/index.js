const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const corsOptions = {
    origin: "https://parvashah.vercel.app", 
    methods: "GET,POST",
    credentials: true
  };
  app.use(cors(corsOptions));
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error", err));


const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  subject: String,
  message: String,
});

const FormSubmission = mongoose.model("FormSubmission", formSchema);


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  try {

    const newSubmission = new FormSubmission({ firstName, lastName, email, subject, message });
    await newSubmission.save();


    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,  
      subject: "Thank You for Contacting Us!",
      text: `Hi ${firstName},\n\nWe've received your message and will respond shortly.\n\nBest Regards,\nParva Shah`,
    });

    res.status(200).json({ message: "Form submitted successfully and saved to database!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
});

module.exports = app;