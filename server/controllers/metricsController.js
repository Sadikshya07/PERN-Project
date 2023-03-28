const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.metrics.findFirst({
      orderBy: {
        createdAt: "desc",
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
router.get("/all", async (req, res) => {
  try {
    const results = await prisma.metrics.findMany({
      orderBy: {
        createdAt: "desc",
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
    const { id } = req.params;
    const results = await prisma.metrics.findFirst({
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
router.post("/", async (req, res) => {
  try {
    const { Students, StudentsPerClass, Teachers, StudentTeacherRatio } =
      req.body.formData;
    const data = {
      Students,
      StudentsPerClass,
      Teachers,
      StudentTeacherRatio,
    };
    console.log(data);
    const results = await prisma.metrics.create({
      data,
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
    const { Students, StudentsPerClass, Teachers, StudentTeacherRatio } =
      req.body;

    const data = {
      Students,
      StudentsPerClass,
      Teachers,
      StudentTeacherRatio,
    };
    const results = await prisma.metrics.update({
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
    const { Students, StudentsPerClass, Teachers, StudentTeacherRatio } =
      req.body;

    const data = {
      Students,
      StudentsPerClass,
      Teachers,
      StudentTeacherRatio,
    };
    const results = await prisma.metrics.delete({
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
