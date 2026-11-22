

const router = require('express').Router();
const { addDepartment,getAllDepartments, getOneDepartment} = require('../controller/departmentController');

const {createDepartmentValidation} = require('../middleware/departmentValidation');
router.post('/department', createDepartmentValidation, addDepartment);

router.get('/department', getAllDepartments);


router.get('/department/:id', getOneDepartment);

module.exports = router;
