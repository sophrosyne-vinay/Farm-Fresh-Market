import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import complaintRoutes from './routes/complaintRoutes.js'; // Added complaint routes import
import cors from 'cors';
import path from 'path';

// Configure environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static files from the React build
app.use(express.static(path.join(new URL(import.meta.url).pathname, '../client/build')));

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/complaint', complaintRoutes); // Added complaint routes

// Serve React frontend
app.use('*', (req, res) => {
    res.sendFile(path.join(new URL(import.meta.url).pathname, '../client/build/index.html'));
});

// Define the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan.white);
});
