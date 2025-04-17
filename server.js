// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env

// Create an Express application
const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define a test route
app.get('/', (req, res) => {
    res.send("Financial Literacy API Running");
});

// Set the port number
const PORT = process.env.PORT || 5050;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require('./routes/auth');

app.use('/api', authRoutes);

const budgetRoutes = require('./routes/budget');

app.use('/api/budget', budgetRoutes);

const savingsRoutes = require('./routes/savings');

app.use('/api/savings', savingsRoutes);

const contactRoutes = require('./routes/contact');

app.use('/api/contact', contactRoutes);
