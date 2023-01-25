const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});