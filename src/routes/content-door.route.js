"use strict";

const express = require("express");
const router = express.Router();

const { getMeme } = require("../shared/services/content-door.service");

router.get("/:door", (req, res) => {
  const DOOR = req.params.door;

  getMeme(DOOR)
    .then((meme) => res.status(meme.status).json(meme.data))
    .catch((err) => res.status(err.status).json(err));
});

module.exports = router;
