const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "todo pulento con el GET",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "todo pulento con el POST",
  });
});

module.exports = router;
