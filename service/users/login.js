const { findByEmail } = require('../../models/user');
const tokenGenerator = require('./tokenGenerator');

const login = async (body) => {
  const { email: inputEmail, password: inputPassword } = body;

  const user = await findByEmail(inputEmail);

  const { password, firstName, lastName, email } = user;

  if (
    !user
    || inputPassword !== password
    || inputEmail !== email
    ) return { unauthent: true };

  const payload = { firstName, lastName, email };

  const token = tokenGenerator(payload);

  return { token };
};

module.exports = login;
