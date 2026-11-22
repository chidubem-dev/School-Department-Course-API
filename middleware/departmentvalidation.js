
const Joi = require('joi');

const createDepartmentValidation = (req, res, next) => {
    const departmentSchema = Joi.object({
        name: Joi.string()
            .trim()
            .pattern(new RegExp('^[A-Za-z ]{3,}$'))
            .required()
            .messages({
                'any.required': 'Department name is required',
                'string.empty': 'Department name cannot be empty',
                'string.pattern.base': 'Department name must contain at least 3 letters'
            }),

        faculty: Joi.string()
            .trim()
            .pattern(new RegExp('^[A-Za-z ]{3,}$'))
            .required()
            .messages({
                'any.required': 'Faculty name is required',
                'string.empty': 'Faculty name cannot be empty',
                'string.pattern.base': 'Faculty name must contain at least 3 letters'
            })
    });

    const { error } = departmentSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();
};

module.exports = {
    createDepartmentValidation
};
