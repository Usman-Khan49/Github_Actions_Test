import express from 'express';
import connectDB from './utils/db.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('API Endpoints:');
      console.log('POST /api/users/register - Register a new user');
      console.log('POST /api/users/login - Login and get JWT token');
      console.log('POST /api/events - Create a new event');
      console.log('GET /api/events - Get all events (with optional sorting and filtering)');
      console.log('GET /api/events/:id - Get a specific event');
      console.log('PUT /api/events/:id - Update an event');
      console.log('DELETE /api/events/:id - Delete an event');
    });
  } catch (err) {
    console.error('Error starting the server:', err);
  }
};

startServer();