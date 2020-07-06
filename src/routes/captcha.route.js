"use strict";

const express = require("express");
const router = express.Router();

const {
  getCaptcha,
  validateCaptcha,
} = require("../shared/services/captcha.service");

router.get("/:door", (req, res) => {
  const DOOR = req.params.door;

  getCaptcha(DOOR)
    .then((captcha) => res.status(captcha.status).json(captcha.data))
    .catch((err) => res.status(err.status).json(err));
});

router.post("/", (req, res) => {
  const CAPTCHA = req.body;

  validateCaptcha(CAPTCHA)
    .then((isValid) => res.status(isValid.status).json(isValid.data))
    .catch((err) => res.status(err.status).json(err));
});

module.exports = router;
