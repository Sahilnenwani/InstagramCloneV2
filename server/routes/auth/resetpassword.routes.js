const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendgribtransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgribtransport({
    auth: {
      api_key:
        "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",
    },
  })
);

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
          from: "no-replay@insta.com",
          subject: "password reset",
          html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="${EMAIL}/reset/${token}">link</a> to reset password</h5>
                    `,
        });
        res.json({ message: "check your email" });
      });
    });
  });
});
module.exports = router;
