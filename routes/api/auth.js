const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { body, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.body.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post(
  "/",
  [
    body("email", "Please enter a valid email").not().isEmpty(),
    body("password", "Please enter your password").exists(),
  ],
  async (req, res) => {
    try {
      const user = await User.findById(req.body.id);

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.send(token);
        }
      );
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
  }
);

module.exports = router;
