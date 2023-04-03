const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");
const fs = require("fs");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.courses.findMany({
      orderBy: {
        grade: "desc",
      },
    });
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
    const results = await prisma.courses.findFirst({
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
const filePathServer = "/files/";
router.post("/", async (req, res) => {
  try {
    const { grade } = req.body;
    const vals = await prisma.courses.findFirst({
      where: {
        grade: grade,
      },
    });
    if (vals) {
      return res.status(409).json({
        errors: "Grade data already exists please update or remove the data",
      });
    } else {
      let filePath = filePathServer + Date.now() + "-" + req.files.file.name;
      await req.files.file.mv("./public" + filePath);
      const data = {
        grade: grade,
        file: filePath,
      };
      const results = await prisma.courses.create({
        data: data,
      });
      res.status(201).json({
        status: "success",
        data: results,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;
    const vals = await prisma.courses.findFirst({
      where: {
        id,
      },
    });
    if (req.files) {
      if (req.files.file) {
        FilePath = filePathServer + Date.now() + "-" + req.files.file.name;
        await req.files.file.mv("./public" + FilePath);
        //await fsPromises.unlink(vals.file);
      } else FilePath = "";
    }
    const data = {
      grade: grade,
      ...(FilePath !== "" && { file: FilePath }),
    };
    const results = await prisma.courses.update({
      where: {
        id,
      },
      data: data,
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
    const { id } = req.params;
    const vals = await prisma.courses.courses.findFirst({
      where: {
        id: id,
      },
    });

    await fs.unlink("./public/" + vals.file);
    const results = await prisma.courses.delete({
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
