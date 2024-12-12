const errorHandler = (err, _req, res, _next) => {
  const error = {
    message: err.message || 'Internal Server Error',
    status: err.status || 500,
  };

  console.error(err);

  res.status(error.status).json({ error: error.message });
};

module.exports = errorHandler;