const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const app = express()
  .use(cors())
  .use(morgan("combined"))
  .use(express.json())
  .use("/api", require("./routes/index"));

app.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(">".repeat(40));
  console.info("💻  WE CARE API ALIVE");
  console.info(`📡  PORT: http://localhost:3000`);
  console.info(">".repeat(40) + "\n");
});

mongoose.connect(
  process.env.MONGO_URL_PROD || "mongodb://localhost:27017/",
  {
    dbName: "wecare",
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.info("💾 Connected to Mongo Database \n");
  }
);
