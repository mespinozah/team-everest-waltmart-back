/**
 * Retorna un 200.
 *
 * @param {Object} data Objeto de la respuesta.
 * @param {*} message Mensaje de la respuesta.
 */
module.exports.getOK = (data, message) => {
  return {
    status: 200,
    data,
    message,
  };
};

/**
 * Retonar un 404.
 */
module.exports.getNotFound = () => {
  return {
    status: 404,
    message: "no se encontraron resultados",
  };
};

/**
 * Retorna un 503.
 *
 * @param {Object} error Objecto del error.
 */
module.exports.getErrorDB = (error) => {
  return {
    status: 503,
    message: "error al llamar a la bd",
    error,
  };
};
