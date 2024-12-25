const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = 'mongodb+srv://21pa1a1238:21pa1a1238@cluster0.osadpdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define schema for job items
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  place: String,
  salary: Number,
  endDate: Date,
  vacancy: Number,
  industry: String,
});

// Create model from job item schema
const Item = mongoose.model('Item', itemSchema);

// Route to handle POST requests to store job items
app.post('/items', async (req, res) => {
  const { name, description, place, salary, endDate, vacancy, industry } = req.body;
  try {
    const newItem = new Item({ name, description, place, salary, endDate, vacancy, industry });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all job items with optional filtering by industry
app.get('/items', async (req, res) => {
  const { industry } = req.query;
  const filter = industry ? { industry } : {};
  try {
    const items = await Item.find(filter);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Function to delete expired jobs
const deleteExpiredJobs = async () => {
  try {
    const currentDate = new Date();
    await Item.deleteMany({ endDate: { $lt: currentDate } });
    console.log('Expired jobs deleted successfully.');
  } catch (err) {
    console.error('Error deleting expired jobs:', err);
  }
};

// Schedule job to delete expired jobs daily
setInterval(deleteExpiredJobs, 24 * 60 * 60 * 1000);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
