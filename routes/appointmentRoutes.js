const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

router.post('/', async (req, res) => {
  const app = new Appointment(req.body);
  await app.save();
  res.send("Appointment Saved");
});

router.get('/', async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
});

router.put('/:id', async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, { status: "Approved" });
  res.send("Approved");
});

router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;
