const Joi = require('@hapi/joi');

const STRONG_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

const ERR_LOGIN = {
  'string.base': 'Preencha apenas com letras.',
  'string.empty': 'Este campo não pode ser vazio.',
  'string.min': 'Utilize no mínimo de 3 caracteres.',
  'any.required': 'Este campo é obrigatório.',
};
const ERR_REGISTER = {
  'any.required': 'Este campo é obrigatório.',
  'date.iso': 'Data no formato inválido', // PROCURAR FORMATO date.iso ou outros
  'string.base': 'Preencha apenas com letras.',
  'string.empty': 'Este campo não pode ser vazio.',
  'string.min': 'Utilize no mínimo de 8 caracteres.',
  'string.email': 'Preencha este campo com um email válido.',
  'string.pattern': 'Preencha com pelo menos: 1 letra maiúscula, 1 número e 1 caractere especial.',
};

const SCHEMA_LOGIN = {
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages(ERR_LOGIN),
  password: Joi.string().min(8).alphanum().required()
    .messages(ERR_LOGIN),
};

const SCHEMA_REGIS = {
  firstName: Joi.string().min(3).required().messages(ERR_REGISTER),
  lastName: Joi.string().min(3).required().messages(ERR_REGISTER),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages(ERR_REGISTER),
  password: Joi.string().pattern(STRONG_PASSWORD).messages(ERR_REGISTER),
  confirmPassword: Joi.string().min(8).required()
    .messages(ERR_REGISTER),
  sex: Joi.string().min(3).required().messages(ERR_REGISTER),
  birthDate: Joi.date().iso().required().messages(ERR_REGISTER),
};

const validateLogin = async (body) => Joi.object(SCHEMA_LOGIN).validate(body);
const validateRegister = async (body) => Joi.object(SCHEMA_REGIS).validate(body);

module.exports = {
  validateLogin,
  validateRegister,
};