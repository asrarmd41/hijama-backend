const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const adminRoutes = require("./routes/adminRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const therapyRoutes = require("./routes/therapyRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Routes
app.use("/admin", adminRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/therapies", therapyRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hijama Clinic Backend Running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
