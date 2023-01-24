const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());



app.get("/admin/aboutus/management", async (req, res) => {
  try {
    const results = await prisma.management.findMany();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/admin/aboutus/management/:id", async (req, res) => { 
  try {
    const id = req.params.id;
    const results = await prisma.management.findFirst();
    res.status(200).json({
      status: "success",
      data: results.row[id],
    });
  } catch (error) {
    console.error(error.message);
  }
});
app.post("/admin/aboutus/management", async (req, res) => {
  const {
    name,description,position
  } = req.body;

  const data = {
    name:name,
    description:description,
    position:position
  };
  
  try {
    const results = await prisma.management.create(
      {
        data: data,
      }
    );
    res.status(201).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.error(error.message);
  }
});
app.put("/admin/aboutus/management/:id", async (req, res) => {
  try {
    const results = await prisma.management.findMany();
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        management: results.row[0],
      },
    });
  } catch (error) {
    console.error(error.message);
  }
});
app.delete("/admin/aboutus/management/:id", async (req, res) => {
  try {
    const results = await prisma.management.findMany();
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        management: results.row[0],
      },
    });
  } catch (error) {
    console.error(error.message);
  }
});
const port = 3001;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
