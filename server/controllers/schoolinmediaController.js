const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.schoolinmedia.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
});

function exclude(result, keys) {
  for (let key of keys) {
    delete result[key];
  }
  return result;
}

router.get("/latest", async (req, res) => {
  try {
    const results = await prisma.schoolinmedia.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        Link: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
    const resultsWithoutImage = exclude(results, ["Image"]);
    res.status(200).json({
      status: "success",
      data: resultsWithoutImage,
    });
  } catch (err) {
    console.log(err.message);
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
const imageServerPath = "/images/";
router.post("/", async (req, res) => {
  try {
    let ImagePath = imageServerPath + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const { title, author, Link } = req.body;
    const data = {
      title,
      author,
      Link,
      Image: ImagePath,
    };
    const results = await prisma.schoolinmedia.create({
      data: data,
    });
    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.error(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, Image, Link } = req.body;

    const data = {
      title,
      author,
      Image,
      Link,
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
    const { title, author, Image, Link } = req.body;

    const data = {
      title,
      author,
      Image,
      Link,
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
