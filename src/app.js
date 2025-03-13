import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/events', eventRoutes);

export default app;