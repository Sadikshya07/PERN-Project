const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.json());
const analysisreportRoute = require("./controllers/analysisreportController");
const managementRoute = require("./controllers/managementController");

app.use("/api/admin/publications/analysisreport",analysisreportRoute);
app.use("/api/admin/aboutus/management", managementRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
