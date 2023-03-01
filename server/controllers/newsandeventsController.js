const express = require("express");
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
    let ImagePath;
    console.log(req.files);
    ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const data = {
      title: title,
      description: description,
      image: ImagePath,
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
