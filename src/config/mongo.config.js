"use strict";

const mongoose = require("mongoose");
const { MONGO_URI, MONGO_USER, MONGO_PASS, MONGO_DB } = require("../env/env");

module.exports.mongoStart = async () => {
  await mongoose.connect(generateURI(MONGO_URI), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

const generateURI = (uri) => {
  uri = uri.replace("{user}", MONGO_USER);
  uri = uri.replace("{password}", MONGO_PASS);
  uri = uri.replace("{dbname}", MONGO_DB);
  return uri;
};
