const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
