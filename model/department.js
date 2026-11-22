const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course'
    }]
}, {
    timestamps: true
});

const departmentModel = mongoose.model('Department', departmentSchema);

module.exports = departmentModel;