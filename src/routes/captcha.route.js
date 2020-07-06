const express = require("express");

const router = express.router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.ge;

module.exports = router;
