const express = require("express");
const process = require("process");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//Connect Database

connectDB();

//app.get("/", (req, res) => res.send("Hello Wad"));

app.use(
  express.json({
    extended: false,
  })
);

// Define Routes
app.use("/api/posts", require("./routes/posts"));
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  // ... other app.use middleware
  app.use(express.static(path.join(__dirname, "client", "build")));
  // process.env.ENV_VAR_NAME

  // ...
  // Right before your app.listen(), add this:
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening at port: ${PORT}`));
