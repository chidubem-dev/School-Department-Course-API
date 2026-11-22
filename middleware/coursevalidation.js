
const Joi = require('joi');

const createCourseValidation = (req, res, next) => {
    const courseSchema = Joi.object({
        courseCode: Joi.string()
            .trim()
            .pattern(new RegExp('^[A-Z]{3}[0-9]{3}$'))
            .required()
            .messages({
                'any.required': 'Course code is required',
                'string.empty': 'Course code cannot be empty',
                'string.pattern.base': 'Course code must contain 3 capital letters followed by 3 numbers, e.g. CSC101'
            }),

        title: Joi.string()
            .trim()
            .pattern(new RegExp('^[A-Za-z ]{3,}$'))
            .required()
            .messages({
                'any.required': 'Course title is required',
                'string.empty': 'Course title cannot be empty',
                'string.pattern.base': 'Course title must contain at least 3 letters'
            }),

        creditUnits: Joi.number()
            .integer()
            .min(1)
            .max(6)
            .required()
            .messages({
                'any.required': 'Credit units are required',
                'number.base': 'Credit units must be a number',
                'number.min': 'Credit units must be at least 1',
                'number.max': 'Credit units cannot exceed 6'
            }),

        department: Joi.string()
            .pattern(new RegExp('^[0-9a-fA-F]{24}$'))
            .required()
            .messages({
                'any.required': 'Department ID is required',
                'string.pattern.base': 'Enter a valid Department ID'
            })
    });

    const { error } = courseSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    next();
};

module.exports = {
    createCourseValidation
};
