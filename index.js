const express = require("express");
const mongodb = require("mongodb");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
app.use(express.json());
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
app.use(cors());

// DB connection
mongoose
  .connect(process.env.DB)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("DB Connected Successfully" + process.env.PORT);
    });
  })
  .catch((error) => console.log("Error"));

app.use("/api/tasks", taskRoutes);
