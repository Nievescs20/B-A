const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "..", "dist")));

// Catch-all routes for handling client-side routing in your React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

// Start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Kickin it on port ${port}`);
});
