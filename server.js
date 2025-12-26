require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.log(">>> THIS SERVER.JS FILE IS RUNNING <<<");

const adminRoutes = require('./routes/adminRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ HEALTH CHECK ROUTE (MUST BE BEFORE app.listen)
app.get("/", (req, res) => {
  res.send("Hijama Clinic Backend Running");
});

// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use('/admin', adminRoutes);
app.use('/appointments', appointmentRoutes);

// Start server (ALWAYS LAST)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

