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
    const results = await prisma.studentcorner.findMany();
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
    const results = await prisma.studentcorner.findFirst({
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
let imagePathServer = "/images/";

router.post("/", async (req, res) => {
  try {
    let ImagePath;
    ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
    await req.files.image.mv("./public" + ImagePath);
    const { StudentName, Rollno, Grade, ArticleTitle, ArticleContent } =
      req.body;

    const data = {
      studentname: StudentName,
      rollnumber: parseInt(Rollno),
      grade: parseInt(Grade),
      articletitle: ArticleTitle,
      articlecontent: ArticleContent,
      image: ImagePath,
    };
    const results = await prisma.studentcorner.create({
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
     let ImagePath;
     ImagePath = imagePathServer + Date.now() + "-" + req.files.image.name;
     await req.files.image.mv("./public" + ImagePath);
     const { StudentName, Rollno, Grade, ArticleTitle, ArticleContent } =
       req.body;
 
     const data = {
       studentname: StudentName,
       rollnumber: parseInt(Rollno),
       grade: parseInt(Grade),
       articletitle: ArticleTitle,
       articlecontent: ArticleContent,
       image: ImagePath,
     };
     const results = await prisma.studentcorner.update({
      where: {
        id,
      },
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
 
router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { StudentName, Rollno, Grade, ArticleTitle, ArticleContent,image} =
      req.body;
      const data = {
      studentname: StudentName,
       rollnumber: parseInt(Rollno),
       grade: parseInt(Grade),
       articletitle: ArticleTitle,
       articlecontent: ArticleContent,
       image: image,
      };
      const results = await prisma.studentcorner.delete({
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
