const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const result = await prisma.homeImage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      status: "sucess",
      data: result,
    });
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/latest", async (req, res) => {
  try {
    const result = await prisma.homeImage.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      status: "sucess",
      data: result,
    });
  } catch (err) {
    console.log(err.message);
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
      image1: imagePath1,
      image2: imagePath2,
      image3: imagePath3,
    };
    const results = await prisma.homeImage.create({
      data: data,
    });
    res.status(201).json({
      status: "success",
      data: results,
    });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
