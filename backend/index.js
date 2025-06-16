const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const corsOptions = {
    origin: "http://localhost:5174", 
    methods: "GET,POST",
    credentials: true
  };
  app.use(cors(corsOptions));
app.use(express.json());


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,  
      subject: "Thank You for Contacting Us!",
      text: `Hi ${name},\n\nWe've received your message and will respond shortly.\n\nBest Regards,\nParva Shah`,
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
});

module.exports = app;

// app.listen(4000,()=>{
//   console.log("Server Started")
// })