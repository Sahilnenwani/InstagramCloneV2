const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
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

router.post("/new-password", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" });
      }
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => console.log(err));
});
module.exports = router;
