const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.popup.findMany();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.log(error.message);
  }
});
router.get("/one", async (req, res) => {
  try {
    const results = await prisma.popup.findFirst({
      orderBy: {
        createdAt: "desc",
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
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const results = await prisma.popup.findFirst({
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
    let ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const data = {
      Image: ImagePath,
    };
    const results = await prisma.popup.create({
      data: data,
    });
    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error(error.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const data = {
      Image: ImagePath,
    };
    const results = await prisma.popup.update({
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
    const { Image } = req.body;

    const data = {
      Image,
    };
    const results = await prisma.popup.delete({
      where: {
        id,
      },
    });
    console.log(results);
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
