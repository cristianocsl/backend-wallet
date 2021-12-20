const Joi = require('@hapi/joi');

const ERR_EXPENSE_REG = {
  'any.required': 'Este campo é obrigatório.',
  'date.iso': 'Data no formato inválido', // PROCURAR FORMATO date.iso ou outros
  'string.base': 'Preencha apenas com letras.',
  'string.empty': 'Este campo não pode ser vazio.',
  'string.min': 'Utilize no mínimo de 8 caracteres.',
  'string.email': 'Preencha este campo com um email válido.',
  'string.pattern': 'Preencha com pelo menos: 1 letra maiúscula, 1 número e 1 caractere especial.',
};

const SCHEMA_EXPENSE = {
  description: Joi.string().required().messages(ERR_EXPENSE_REG),
  value: Joi.number().required().messages(ERR_EXPENSE_REG),
  currency: Joi.string().messages(ERR_EXPENSE_REG),
  convertedValue: Joi.number().required().messages(ERR_EXPENSE_REG),
  convertedValueCurrency: Joi.number().required().messages(ERR_EXPENSE_REG),
  exchangeRate: Joi.number().required().messages(ERR_EXPENSE_REG),
  paymentMethod: Joi.string().required().messages(ERR_EXPENSE_REG),
  tag: Joi.string().required().messages(ERR_EXPENSE_REG),
};

const validateExpense = async (body) => Joi.object(SCHEMA_EXPENSE).validate(body);

module.exports = validateExpense;
