const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, phoneNumber, fromAddress, destination, travelDate, returnDate, travelers, specialRequests } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mallibennur141@gmail.com', // Your email address
      pass: 'ugqkuezasrmdbrci' // Your email password or app-specific password
    }
  });

  const mailOptions = {
    from: 'shubhamprabhu1001@gmail.com', // The sender's email
    to: 'ullasbs005@gmail.com', // Recipient email
    subject: 'New Travel Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      From Address: ${fromAddress}
      Destination: ${destination}
      Travel Date: ${travelDate}
      Return Date: ${returnDate}
      Number of Travelers: ${travelers}
      Special Requests: ${specialRequests}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
