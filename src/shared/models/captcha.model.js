"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CaptchaSchema = new Schema({
  door: { type: String, required: true },
  sparks: { type: [Number], required: true },
  alternative: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("captchas", CaptchaSchema);
