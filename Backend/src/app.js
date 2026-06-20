const express = require("express");
const cors = require("cors");
const enquiryRoutes = require("./routes/enquiryRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/enquiry", enquiryRoutes);

app.get("/", (req, res) => {
  res.send({ message: "server is running successfully" });
});

module.exports = app;
