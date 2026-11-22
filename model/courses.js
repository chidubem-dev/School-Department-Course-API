const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    creditUnits: {
        type: Number,
        required: true
    },
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Department',
        required: true
    }
}, {
    timestamps: true
});

const courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;