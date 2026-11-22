
const departmentModel = require('../model/department');


exports.addDepartment = async (req, res) => {
    try {
        const { name, faculty } = req.body;

        const data = {
            name,
            faculty
        };

        const newDepartment = await departmentModel.create(data);

        res.status(201).json({
            message: "Department created successfully",
            data: newDepartment
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await departmentModel.find().populate('courses');

        res.status(200).json({
            message: `All departments found and the Total is: ${departments.length}`,
            data: departments
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


exports.getOneDepartment = async (req, res) => {
    try {
        const { id } = req.params;

        const department = await departmentModel.findById(id).populate('courses');

        if (!department) {
            return res.status(404).json({
                message: "Department not found"
            });
        }

        res.status(200).json({
            message: "Department found",
            data: department
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
