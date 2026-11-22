


const router = require('express').Router();

const {
    add,
    getAll
} = require('../controller/courseController');

const {
    createCourseValidation
} = require('../middleware/courseValidation');

router.post('/course', createCourseValidation, add);

router.get('/course', getAll);

module.exports = router;
