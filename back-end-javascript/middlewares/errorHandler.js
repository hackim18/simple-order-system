function errorHandler(err, req, res, next) {
  console.log("🚀 ~ errorHandler ~ err:", err.message);
  console.log("🚀 ~ errorHandler ~ err:", err.name);
  let statusCode;
  let errorMessage;

  switch (err.name) {
    case "NotFoundError":
      statusCode = 404;
      errorMessage = err.message || "Not found";
      break;
    case "ForbiddenError":
      statusCode = 403;
      errorMessage = err.message || "Forbidden";
      break;
    case "SequelizeValidationError":
      statusCode = 400;
      errorMessage = err.errors.map((error) => error.message).join(", ");
      break;
    default:
      statusCode = 500;
      errorMessage = err.message || "Internal server error";
      break;
  }
  res.status(statusCode).json({ error: errorMessage });
}

module.exports = errorHandler;
