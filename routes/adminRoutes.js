const express = require('express');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) return res.json({ success: false });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.json({ success: false });

  res.json({ success: true });
});

module.exports = router;
