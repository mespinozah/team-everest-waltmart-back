const ContentDoorSchema = require("../models/content-door.model");
const { getOK, getErrorDB, getNotFound } = require("../utils/http.util");

module.exports = class ContentDoorService {
  /**
   * Busca el memme según la puerta seleccionada.
   *
   * @param {string} door Puerta seleccionada.
   */
  static getMeme(door) {
    return new Promise((resolve, reject) => {
      ContentDoorSchema.findOne({ door }, (err, meme) => {
        if (!!err) {
          reject(getErrorDB(err));
        } else {
          if (!!meme) {
            resolve(getOK(meme));
          } else {
            reject(getNotFound());
          }
        }
      });
    });
  }
};
