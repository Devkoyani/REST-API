const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data for courses
let courses = [
    { id: 'CE356', name: 'SOC', description: 'This subject is Soc' },
    { id: 'CE345', name: 'CN', description: 'This subject is CN' },
    { id: 'CE360', name: 'SGP', description: 'This subject is SGP' }
];

// Middleware
app.use(bodyParser.json());

// Course Listing Endpoint
app.get('/api/courses', (req, res) => {
    res.status(200).json(courses);
});

// Course Registration Endpoint
app.post('/api/register-course', (req, res) => {
    const { courseId, userId } = req.body;
    // Perform validation and registration logic here
    res.status(201).json({ message: 'Course registered successfully' });
});

// User's Registered Courses Endpoint
app.get('/api/user-courses/:userId', (req, res) => {
    const userId = req.params.userId;
    // Dummy implementation to get registered courses of the user
    const userCourses = []; // Replace with actual logic
    res.status(200).json(userCourses);
});

// Course Details Endpoint
app.get('/api/course/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = courses.find(course => course.id === courseId);
    if (!course) {
        res.status(404).json({ error: 'Course not found' });
    } else {
        res.status(200).json(course);
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Course Registration API!');
  });
  
// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
