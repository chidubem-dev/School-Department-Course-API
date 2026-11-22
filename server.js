

const express = require('express');
const app = express();

require('dotenv').config();

const departmentRoutes = require('./Route/departmentRoutes');
const courseRoutes = require('./Route/courseRoutes');

app.use(express.json());

require('./Database/database');

app.use('/api', departmentRoutes);
app.use('/api', courseRoutes);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});