const Joi = require('joi');
const moment = require('moment');

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


// Define a date format for validation
const dateFormat = 'DD/MM/YYYY';

// Joi schema with date validation
const budgetSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    category_id: Joi.number().integer().required(),
    amount: Joi.number().positive().required(),
    start_date: Joi.string()
        .required()
        .custom((value, helpers) => {
            const date = moment(value, dateFormat, true);
            if (!date.isValid()) {
                return helpers.message(`Invalid start date format. Use ${dateFormat}`);
            }
            return value;
        }),
    end_date: Joi.string()
        .required()
        .custom((value, helpers) => {
            const date = moment(value, dateFormat, true);
            if (!date.isValid()) {
                return helpers.details[0].message(`Invalid end date format. Use ${dateFormat}`);
            }
            return value;
        })
});

// Example usage
const budgetData = {
    user_id: 1,
    category_id: 2,
    amount: 245600,
    start_date: '12/04/2003',
    end_date: '15/02/2004'
};

const { error, value } = budgetSchema.validate(budgetData);

if (error) {
    console.error('Validation error:', error.details[0].message);
} else {
    console.log('Validated data:', value);
}

// Export the schemas
module.exports = {
    userSchema,
    categorySchema,
    paymentMethodSchema,
    expenseSchema,
    budgetSchema
};
