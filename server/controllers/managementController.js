const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const results = await prisma.management.findFirst({
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
    const { name, description, position } = req.body;
    let ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const data = {
      name,
      description,
      image: ImagePath,
      position,
    };
    console.log(data);
    const results = await prisma.management.create({
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
    const { name, description, position} = req.body;
    let ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const data = {
      name,
      description,
      position,
      image: ImagePath,
    };
    const results = await prisma.management.update({
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
    const { name, description, position,image } = req.body;

    const data = {
      name: name,
      description: description,
      position: position,
      image: image
    };
    const results = await prisma.management.delete({
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
