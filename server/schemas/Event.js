const Joi = require(`joi`);

const schema = {

  date: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(10)
  },
  hour: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(5)
  },
  capacity: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(2)
  },
  what: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(100)
  },
  description: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(300)
  },
  creator: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(100)
  },
  users: {
    type: String,
    required: true,
    validation: Joi.string().min(1).max(500)
  }


};

module.exports = {schema};
