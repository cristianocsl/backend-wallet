const { findByEmail } = require('../../models/user');
const tokenGenerator = require('./tokenGenerator');

const login = async (body) => {
  const { email } = body;

  const user = await findByEmail(email);

  if (!user) return 'este usuário não está cadastrado';

  const token = tokenGenerator();

  return { token };
};

module.exports = login;
