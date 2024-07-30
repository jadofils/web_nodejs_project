const Joi = require('joi');

// Validates users schema by Joi
const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
});

// Validates the categories schema
const categorySchema = Joi.object({
    user_id: Joi.number().integer().required(),
    category_name: Joi.string().max(255).required()
});

// Payment backend validation
const paymentMethodSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    payement_method_name: Joi.string().max(255).required()
});

// Validating expenses
const expenseSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    category_id: Joi.number().integer().required(),
    amount: Joi.number().integer().required(),
    date: Joi.date().required(),
    description: Joi.string().allow('').max(255)
});
// Budget schema validation
const bugetSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    category_id: Joi.number().integer().required(),
    amount: Joi.number().integer().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required()
});
// Export the schemas
module.exports = {
    userSchema,
    categorySchema,
    paymentMethodSchema,
    expenseSchema,
    bugetSchema
};
