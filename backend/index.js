const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const XLSX = require("xlsx");
require("dotenv").config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const saveToExcel = (data) => {
  const filePath = "form-submissions.xlsx";
  let workbook, worksheet;

  if (fs.existsSync(filePath)) {
    
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets["Submissions"];
  } else {
   
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([
      ["First Name", "Last Name", "Email", "Subject", "Message"], // Headers
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
  }


  let dataArray = XLSX.utils.sheet_to_json(worksheet, { header: 1 });


  dataArray.push([
    data.firstName,
    data.lastName,
    data.email,
    data.subject,
    data.message,
  ]);


  worksheet = XLSX.utils.aoa_to_sheet(dataArray);
  workbook.Sheets["Submissions"] = worksheet;


  XLSX.writeFile(workbook, filePath);
};

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

 
  saveToExcel(req.body);


  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});