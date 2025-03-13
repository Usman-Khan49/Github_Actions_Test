import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

// Create Event
router.post('/', auth, createEvent);

// Get All Events for User
router.get('/', auth, getAllEvents);

// Get Single Event
router.get('/:id', auth, getEventById);

// Update Event
router.put('/:id', auth, updateEvent);

// Delete Event
router.delete('/:id', auth, deleteEvent);

export default router;