const { findByEmail } = require('../../models/user');
const tokenGenerator = require('./tokenGenerator');

const login = async (body) => {
  const { email, password: inputPassword } = body;

  const user = await findByEmail(email);

  const { password, firstName, lastName } = user;

  if (!user || inputPassword !== password) return { unaunthent: true };

  const payload = { firstName, lastName, email };

  const token = tokenGenerator(payload);

  return { token };
};

module.exports = login;
