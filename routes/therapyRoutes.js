const express = require('express');
const Therapy = require('../models/Therapy');
const router = express.Router();

router.post('/', async (req, res) => {
  const therapy = new Therapy(req.body);
  await therapy.save();
  res.send("Therapy added");
});

router.get('/', async (req, res) => {
  const data = await Therapy.find();
  res.json(data);
});

router.delete('/:id', async (req, res) => {
  await Therapy.findByIdAndDelete(req.params.id);
  res.send("Therapy deleted");
});

module.exports = router;
