const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.newsletter.findMany();
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
    const results = await prisma.newsletter.findFirst({
      where: {
        id: id,
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
const imagePathServer = "/public/images/";
const filePathServer = "/public/files/";
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    // image and file upload
    let ImagePath, FilePath;

    ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    console.log(ImagePath);
    FilePath = filePathServer + Date.now() + "-" + req.files.file.name;

    await req.files.image.mv("." + ImagePath);
    await req.files.file.mv("." + FilePath);

    const data = {
      name: name,
      image: ImagePath,
      file: FilePath,
    };
    const results = await prisma.newsletter.create({
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
    const { name } = req.body;

    const data = {
      name: name,
    };
    const results = await prisma.newsletter.update({
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
    const { name } = req.body;

    const data = {
      name: name,
    };
    const results = await prisma.newsletter.delete({
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
