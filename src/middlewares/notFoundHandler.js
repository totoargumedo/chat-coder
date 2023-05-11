const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    status: 404,
    method: req.method,
    path: req.url,
    response: "Not Found", //info minima para entregar al cliente
  });
};

export default notFoundHandler;
