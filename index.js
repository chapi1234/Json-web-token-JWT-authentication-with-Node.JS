const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv')
const app = express();

// dotenv.config()

// connect MongoDB
mongoose.connect('mongodb+srv://metasebiyawasfaw:awt@clusterkal.e4bll.mongodb.net/?retryWrites=true&w=majority&appName=Clusterkal',
//  { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

//Import Routes
const authRoute = require('./routes/auth');

// Middleware
app.use(express.json()) 
 
// Route Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is running on port 3000'));