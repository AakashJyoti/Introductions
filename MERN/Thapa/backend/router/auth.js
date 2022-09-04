const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello World from router");
});

//  --- Signin Routes---
router.post("/signin", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Incomplete credentials" });
  }

  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(422).json({ error: "Email already Exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Invalid Passoword Confirmation" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "New User Created" });
    }
  } catch (error) {
    console.log(error);
  }
});

// --- Login Routes ---
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Incomplete credentials" });
  }

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      const passwordCheck = await bcrypt.compare(password, userExists.password);

      const token = await userExists.generateAuthToken();
      console.log(token);

      if (passwordCheck) {
        res.status(201).json({ message: "Got your user" });
        console.log(userExists);
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
