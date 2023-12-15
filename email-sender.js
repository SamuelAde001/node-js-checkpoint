const nodeMailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "myemail@gmail.com",
    pass: "mypassword",
  },
});

// Email details
const mailOptions = {
  from: "myemail@gmail.com",
  to: "recievers-email@example.com",
  subject: "This is a test Email",
  text: "This is a test email from Node.js!",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
