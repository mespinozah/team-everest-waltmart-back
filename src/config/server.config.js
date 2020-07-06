"use strict";

const { PORT } = require("../env/env");
const { mongoStart } = require("./mongo.config");

module.exports.serverStart = async (app) => {
  console.log("conectando...");
  await mongoStart();
  await app.listen(PORT, () =>
    console.log(`servidor corriendo en el puerto ${PORT}`)
  );
};
