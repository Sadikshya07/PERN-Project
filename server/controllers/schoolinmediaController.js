const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.schoolinmedia.findMany();
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
    const results = await prisma.schoolinmedia.findFirst({
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
    const {title,author,Image,Link  } = req.body;
    const data = {
        title,
        author,
        Image,
        Link
    };
    console.log(data);
    const results = await prisma.schoolinmedia.create({
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
    const {title,author,Image,Link} = req.body;

    const data = {
        title,
        author,
        Image,
        Link
    };
    const results = await prisma.schoolinmedia.update({
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
    const {title,author,Image,Link} = req.body;

    const data = {
        title,
        author,
        Image,
        Link
    };
    const results = await prisma.schoolinmedia.delete({
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
