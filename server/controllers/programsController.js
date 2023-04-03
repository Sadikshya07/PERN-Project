const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.programs.findMany();
    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    console.log(error.message);
  }
});
router.get("/latest", async (req, res) => {
  try {
    const results = await prisma.programs.findFirst({
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
    const results = await prisma.programs.findFirst({
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
    let imagePath1 = imagePathServer + Date.now() + "-" + req.files.image1.name;
    let imagePath2 = imagePathServer + Date.now() + "-" + req.files.image2.name;
    let imagePath3 = imagePathServer + Date.now() + "-" + req.files.image3.name;

    await req.files.image1.mv("./public" + imagePath1);
    await req.files.image2.mv("./public" + imagePath2);
    await req.files.image3.mv("./public" + imagePath3);

    const data = {
      elementryImage: imagePath1,
      middleImage: imagePath2,
      higherImage: imagePath3,
    };

    const results = await prisma.programs.create({
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
    let imagePath1 = imagePathServer + Date.now() + "-" + req.files.image1.name;
    let imagePath2 = imagePathServer + Date.now() + "-" + req.files.image2.name;
    let imagePath3 = imagePathServer + Date.now() + "-" + req.files.image3.name;

    await req.files.image1.mv("./public" + imagePath1);
    await req.files.image2.mv("./public" + imagePath2);
    await req.files.image3.mv("./public" + imagePath3);

    const data = {
      elementryImage: imagePath1,
      middleImage: imagePath2,
      higherImage: imagePath3,
    };
    const results = await prisma.programs.update({
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
    const results = await prisma.programs.delete({
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
