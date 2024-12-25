const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = 'mongodb+srv://21pa1a1238:21pa1a1238@cluster0.osadpdz.mongodb.net/test';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'apply',
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define schema for application form data
const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  experience: String,
  age: Number,
  degree: String,
  industry: String,
});

// Create model from schema
const Application = mongoose.model('Application', applicationSchema);

// Route to handle POST requests to store application form data
app.post('/applications', async (req, res) => {
  const { name, email, phone, experience, age, degree, industry } = req.body;
  try {
    const newApplication = new Application({ name, email, phone, experience, age, degree, industry });
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all applications
app.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
