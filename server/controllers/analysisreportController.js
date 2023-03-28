const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");
const fsPromises = require("fs/promises");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.analysisreport.findMany();
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
    const results = await prisma.analysisreport.findFirst({
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
let imagePathServer = "/images/";
let filePathServer = "/files/";
router.post("/", async (req, res) => {
  try {
    // image and file upload
    let ImagePath, FilePath;

    ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    FilePath = filePathServer + Date.now() + "-" + req.files.file.name;

    await req.files.image.mv("./public" + ImagePath);
    await req.files.file.mv("./public" + FilePath);

    const data = {
      name: name,
      image: ImagePath,
      file: FilePath,
    };
    const results = await prisma.analysisreport.create({
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

    let ImagePath, FilePath;

    const vals = await prisma.analysisreport.findFirst({
      where: {
        id: id,
      },
    });

    // should we check if data are different or not ??

    if (req.files) {
      // checking if image or file has been updated
      if (req.files.image) {
        imagePathServer = ImagePath + Date.now() + "-" + req.files.image.name;
        await req.files.image.mv("./public" + ImagePath);
        await fsPromises.unlink(vals.image);
      } else ImagePath = "";
      if (req.files.file) {
        FilePath = filePathServer + Date.now() + "-" + req.files.file.name;
        await req.files.book_file.mv("./public" + FilePath);
        await fsPromises.unlink(vals.file);
      } else FilePath = "";
    } else {
      ImagePath = "";
      FilePath = "";
    }
    const data = {
      name: name,
      ...(ImagePath !== "" && { image: ImagePath }),
      ...(FilePath !== "" && { file: FilePath }),
    };
    const result = await prisma.analysisreport.update({
      where: {
        id,
      },
      data: data,
    });

    res.status(201).json({
      status: "success",
      data: result,
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
    const results = await prisma.analysisreport.update({
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
    const results = await prisma.analysisreport.delete({
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
