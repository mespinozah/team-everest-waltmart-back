module.exports.PORT = process.env.PORT || 3000;
module.exports.MONGO_USER = process.env.MONGO_USER || "matias";
module.exports.MONGO_PASS = process.env.MONGO_PASS || "UvCBxthdVQYRjghC";
module.exports.MONGO_DB = process.env.MONGO_DB || "captcha_matias";
module.exports.MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://{user}:{password}@development-kv9ot.azure.mongodb.net/{dbname}?retryWrites=true&w=majority";
