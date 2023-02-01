const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

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
  router.post("/", async (req, res) => {
    try {
      console.log(req.body);
      const {studentname,rollnumber,grade,articletitle,articlecontent} = req.body;
      const data = {
            studentname:studentname,
            rollnumber:rollnumber,
            grade:grade,
            articletitle:articletitle,
            articlecontent:articlecontent
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
      const {studentname,rollnumber,grade,articletitle,articlecontent } = req.body;
  
    const data = {
      studentname:studentname,
      rollnumber:rollnumber,
      grade:grade,
      articletitle:articletitle,
      articlecontent:articlecontent
    };
      const results = await prisma.studentcorner.update({
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
      const {studentname,rollnumber,grade,articletitle,articlecontent } = req.body;
  
    const data = {
      studentname:studentname,
      rollnumber:rollnumber,
      grade:grade,
      articletitle:articletitle,
      articlecontent:articlecontent
    };
      const results = await prisma.studentcorner.delete({ 
          where: {
          id,
        },}
      );
      console.log(results);
      res.status(201).json({
        status: "success",
      });
    } catch (error) {
      console.error(error.message);
    }
  });
  module.exports = router;