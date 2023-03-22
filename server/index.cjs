const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "..", "dist")));

// Define a route that returns the index.html file
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
// });

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, ".. ", "dist", "index"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
