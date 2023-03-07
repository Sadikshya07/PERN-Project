const express = require("express");
require("dotenv").config();
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.get("/", async (req, res) => {
  try {
    const results = await prisma.newsandevents.findMany();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/only4", async (req, res) => {
  try {
    const results = await prisma.newsandevents.findMany({
      take: 4,
    });
    res.status(200).json({
      status: "sucess",
      result: results.length,
      data: results,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const results = await prisma.newsandevents.findFirst({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error(error.message);
  }
});
const imagePathServer = "/images/";
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, author, publishdate } = req.body;
    let ImagePath1, ImagePath2;
    console.log(req.files);
    ImagePath1 = imagePathServer + Date.now() + "-" + req.files.image1.name;
    ImagePath2 = `${imagePathServer}${Date.now()}-${req.files.image2.name}`;
    await req.files.image1.mv("./public" + ImagePath1);
    await req.files.image2.mv("./public" + ImagePath2);
    const data = {
      title: title,
      description: description,
      image1: ImagePath1,
      image2: ImagePath2,
      author: author,
      publishdate: publishdate,
    };
    const results = await prisma.newsandevents.create({
      data: data,
    });
    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, author, publishdate } = req.body;

    const data = {
      title: title,
      description: description,
      author: author,
      publishdate: publishdate,
    };
    const results = await prisma.newsandevents.update({
      where: {
        id,
      },
      data,
    });
    console.log(results);
    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, author, publishdate } = req.body;

    const data = {
      title: title,
      description: description,
      author: author,
      publishdate: publishdate,
    };
    const results = await prisma.newsandevents.delete({
      where: {
        id,
      },
    });
    console.log(results);
    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
