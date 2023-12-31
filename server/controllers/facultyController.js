const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
  try {
    const results = await prisma.faculty.findMany();
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
    const results = await prisma.faculty.findFirst({
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
    const { name, description, department, AreaofExpertise, Experience} =
      req.body;
    let ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);

    const data = {
      name: name,
      image: ImagePath,
      description: description,
      department: department,
      AreaofExpertise: AreaofExpertise,
      Experience: Experience,
    };
    const results = await prisma.faculty.create({
      data,
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
    const { name, description, department, AreaofExpertise, Experience} =
      req.body;
      let ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
      await req.files.image.mv("./public" + ImagePath);
    const data = {
      name: name,
      description: description,
      department: department,
      AreaofExpertise: AreaofExpertise,
      Experience: Experience,
      image:ImagePath

    };
    const results = await prisma.faculty.update({
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
    const { name, description, department, AreaofExpertise, Experience, image } =
      req.body;
      
    const data = {
      name,
      description,
      department,
      AreaofExpertise,
      Experience,
      image,
    };
    const results = await prisma.faculty.delete({
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
