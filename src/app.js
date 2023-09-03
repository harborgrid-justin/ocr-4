// Version: 1.0.0
// Serial: ABCD1234

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = require('../config/database');



// Connect to MongoDB
connectDB();


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Placeholder for routes
// ...

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
