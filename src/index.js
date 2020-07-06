"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { CORS_CONFIG } = require("./config/cors.config");
const { serverStart } = require("./config/server.config");

const app = express();

app.use(bodyParser.json());
app.use(cors(CORS_CONFIG));

app.use("/api/captcha", require("./routes/captcha.route"));
app.use("/api/content", require("./routes/content-door.route"));

serverStart(app);
