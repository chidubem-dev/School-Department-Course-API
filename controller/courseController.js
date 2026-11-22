
const courseModel = require('../model/courses');
const departmentModel = require('../model/department');

// Add Course
exports.add = async (req, res) => {
    try {
        const { courseCode, title, creditUnits, department } = req.body;

        const departmentData = await departmentModel.findById(department);

        if (!departmentData) {
            return res.status(404).json({
                message: "Department not found"
            });
        }

        const data = {
            courseCode,
            title,
            creditUnits,
            department
        };

        const newCourse = await courseModel.create(data);

        departmentData.courses.push(newCourse._id);
        await departmentData.save();

        res.status(201).json({
            message: "Course created successfully",
            data: newCourse
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Courses
exports.getAll = async (req, res) => {
    try {
        const courses = await courseModel.find().populate('department');

        res.status(200).json({
            message: "All courses found",
            data: courses
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
