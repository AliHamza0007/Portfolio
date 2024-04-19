const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config(); // Load environment variables from .env file

const app = express(); // Create Express app

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON bodies of incoming requests

// Serve static files from the client/build directory
app.use(express.static(path.join(__dirname, "./client/build")));

// API routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 8080; // Use specified port or default to 8080

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
