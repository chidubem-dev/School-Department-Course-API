# School Department and Course API

## Project Description
This is a School Management API built with Node.js, Express.js, MongoDB, Mongoose and Joi.

The API allows users to create and retrieve departments and courses. It also connects courses to their departments.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi
- dotenv

## Installation

1. Clone the repository.
2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection string and port:

```env
MONGO_URI=your_mongodb_connection_string
PORT=2000
```

4. Start the server:

```bash
npm run dev
```

## API Endpoints

### Department
- POST `/api/department` - Create a department.
- GET `/api/department` - Get all departments.
- GET `/api/department/:id` - Get one department with its courses.

### Course
- POST `/api/course` - Create a course.
- GET `/api/course` - Get all courses with their department details.

## Validation
Joi is used to validate department and course information before saving data to MongoDB.

## Author
School API Project
