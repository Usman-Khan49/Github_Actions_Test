import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
  time: {
    type: Date,
    required: true
  },
  sent: {
    type: Boolean,
    default: false
  }
});

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reminders: [reminderSchema]
});

const Event = mongoose.model('Event', eventSchema);

export default Event;