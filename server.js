import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import complaintRoutes from './routes/complaintRoutes.js';
import cors from 'cors';
import path from 'path';

// Configure environment variables
dotenv.config();

// Create Express app
const app = express();

// ✅ Disable 'X-Powered-By' header (fixes SonarQube warning)
app.disable('x-powered-by');

// ✅ Secure CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://farmfreshmarket.vercel.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

// Connect to the database
connectDB();

// Middleware
app.use(cors(corsOptions));
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
