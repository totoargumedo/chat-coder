const error_handler = (error, req, res, next) => {
  console.error(error);
  return res.status(500).json({
    status: 500,
    method: req.method,
    path: req.url,
    response: error.message, //info minima para entregar al cliente
  });
};

export default error_handler;
