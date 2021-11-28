const getAll = async (req, res, _next) => {
  res.status(200).json({ message: 'Sucesso!!!' });
};

module.exports = (router) => {
  router.get('/', getAll);
};