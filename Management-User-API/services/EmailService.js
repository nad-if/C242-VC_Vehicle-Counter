const nodemailer = require("nodemailer");

const sendOTP = async (recipientEmail, otpCode) => {
  const transporterOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const transporter = nodemailer.createTransport(transporterOptions);

  const mailOptions = {
    from: '"Support Team" <soultanamirulmukminin@gmail.com>',
    to: recipientEmail,
    subject: "Account Activation OTP",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; text-align: center; padding: 20px;">
        <h1 style="color: #007bff;">Your OTP Code</h1>
        <p>Thank you for registering with us. Use the OTP below to activate your account:</p>
        <div style="font-size: 24px; font-weight: bold; margin: 20px 0; padding: 10px; border: 1px solid #ddd; display: inline-block; background-color: #f9f9f9;">
          ${otpCode}
        </div>
        <p style="margin-top: 20px;">This OTP is valid for 3 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOTP;
