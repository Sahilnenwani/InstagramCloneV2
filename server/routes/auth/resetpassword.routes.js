const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const user = process.env.USER;
const pass = process.env.PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exists with that email" });
      }
      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.save().then((user) => {
        transporter.sendMail({
          to: user.email,
          from: process.env.USER,
          subject: "password reset",
          html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                    `,
        });
        res.json({ message: "check your email" });
      });
    });
  });
});
module.exports = router;
