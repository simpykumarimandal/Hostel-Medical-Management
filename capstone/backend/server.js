require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const connectDB = require("./config/database");

const app = express();
const server = http.createServer(app);
const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim())
  : ["*"];
const io = socketIo(server, {
  cors: {
    origin: corsOrigins,
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors({ origin: corsOrigins }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Import routes
const ambulanceRoutes = require("./routes/ambulances");
const bookingRoutes = require("./routes/bookings");
const autoRoutes = require("./routes/autos");

// Use routes
app.use("/api/ambulances", ambulanceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/autos", autoRoutes);

// Test route
app.get("/api", (req, res) => {
  res.json({
    message: "HMS Ambulance API Server is running!",
    endpoints: {
      ambulances: "/api/ambulances",
      bookings: "/api/bookings",
      autos: "/api/autos",
    },
    timestamp: new Date().toISOString(),
  });
});

// Serve frontend + pages (pages first so links resolve from dashboard)
const pagesDir = path.join(__dirname, "../pages");
const frontendDir = path.join(__dirname, "../frontend");
app.use(express.static(pagesDir, { index: false }));
app.use(express.static(frontendDir, { index: false }));

// Serve the demo dashboard as the default page
app.get("/", (req, res) => {
  res.sendFile(path.join(pagesDir, "demo.html"));
});

// API 404 handler
app.use("/api", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// Socket.io for real-time updates
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("ambulance-status-update", (data) => {
    socket.broadcast.emit("ambulance-status-changed", data);
  });

  socket.on("booking-created", (data) => {
    socket.broadcast.emit("new-booking", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`HMS Ambulance Server running on port ${PORT}`);
    console.log(`API URL: http://localhost:${PORT}/api`);
    console.log(`Frontend: http://localhost:${PORT}`);
  });
});
