// inilaize all libary and models
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/key");
const nodemailer = require("nodemailer");

const user = process.env.USER || "instaminiheroku@gmail.com";
const pass = process.env.PASS || "instaminiheroku007";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

//make sigiup routes

router.post("/signup", (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User already exists with that email" });
      }

      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
          pic,
        });

        user
          .save()
          .then((user) => {
            transporter.sendMail({
              to: user.email,
              from: process.env.USER,
              subject: "signup success",
              html: "<h1>welcome to MiniInstagram</h1>",
            });

            res.json({ messagge: "saved successfully" });
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
  // res.json({message:"successfully posted"})
});

module.exports = router;
