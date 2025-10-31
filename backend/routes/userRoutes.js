const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// @route POST /api/users/register
// @desc register a new user
// @access Public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registeration logic
    res.send({ name, email, password });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});

module.exports = router;
