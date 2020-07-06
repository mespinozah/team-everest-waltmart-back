"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContentDoorSchema = new Schema({
  door: { type: String, required: true, unique: true },
  meme: { type: String, required: true },
});

module.exports = mongoose.model("contents", ContentDoorSchema);
