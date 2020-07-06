const CaptchaModel = require("../models/captcha.model");
const { getOK, getErrorDB, getNotFound } = require("../utils/http.util");

module.exports = class CaptchaService {
  /**
   * Busca los captcha y retorna uno aleatorio.
   *
   * @param {string} door Letra de la puerta.
   */
  static getCaptcha(door) {
    return new Promise((resolve, reject) => {
      CaptchaModel.find({ door }, (err, captchas) => {
        if (!!err) {
          reject(getErrorDB(err));
        } else {
          if (captchas.length > 0) {
            const rand = Math.floor(Math.random() * captchas.length);
            resolve(getOK(captchas[rand]));
          } else {
            reject(getNotFound());
          }
        }
      });
    });
  }

  /**
   * Verifica si el captcha es válido.
   *
   * @param {Object} captcha Objeto del captcha.
   */
  static validateCaptcha(captcha) {
    return new Promise((resolve, reject) => {
      CaptchaModel.findOne(
        { alternative: captcha.alternative },
        (err, captchaBD) => {
          if (!!err) {
            reject(getErrorDB(err));
          } else {
            if (!!captchaBD) {
              const isValid = CaptchaService.compareCaptcha(captcha, captchaBD);

              if (isValid) {
                resolve(getOK({ valid: true, message: "captcha valido" }));
              } else {
                resolve(getOK({ valid: false, message: "captcha invalido" }));
              }
            } else {
              reject(getNotFound());
            }
          }
        }
      );
    });
  }

  /**
   * Compara los captcha y valida que este correcto.
   *
   * @param {Object} catpchaRes Objeto enviado por el cliente.
   * @param {Object} captchaDB Objecto obtenido por la bd.
   */
  static compareCaptcha(catpchaRes, captchaDB) {
    const spark1 = catpchaRes.sparks[0] === captchaDB.sparks[0];
    const spark2 = catpchaRes.sparks[1] === captchaDB.sparks[1];
    const spark3 = catpchaRes.sparks[2] === captchaDB.sparks[2];
    const spark4 = catpchaRes.sparks[3] === captchaDB.sparks[3];

    return spark1 && spark2 && spark3 && spark4;
  }
};
