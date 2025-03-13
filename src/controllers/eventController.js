import Event from '../models/event.js';

// Create Event
export const createEvent = async (req, res) => {
  try {
    const { name, description, date, category, reminders } = req.body;

    const event = new Event({
      name,
      description,
      date: new Date(date),
      category,
      user: req.user._id,
      reminders: reminders.map(r => ({ time: new Date(r) }))
    });

    await event.save();

    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Events for User
export const getAllEvents = async (req, res) => {
  try {
    const { sort, category } = req.query;

    let query = { user: req.user._id };

    // Filter by category if provided
    if (category) {
      query.category = category;
    }

    let sortOption = {};

    // Sort options
    if (sort === 'date') {
      sortOption = { date: 1 };
    } else if (sort === 'category') {
      sortOption = { category: 1 };
    } else if (sort === 'reminder') {
      sortOption = { 'reminders.time': 1 };
    } else {
      sortOption = { date: 1 }; // Default sort by date
    }

    const events = await Event.find(query).sort(sortOption);

    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Single Event
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  try {
    const { name, description, date, category, reminders } = req.body;

    // Find and update event
    const event = await Event.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      {
        name,
        description,
        date: new Date(date),
        category,
        reminders: reminders.map(r => ({
          time: new Date(r.time),
          sent: r.sent || false
        }))
      },
      { new: true }
    );

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};