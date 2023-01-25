const express = require("express")
const router = express.Router()


router.get("/admin/publications/studentcorner", async (req, res) => {
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
  router.get("/admin/publications/studentcorner/:id", async (req, res) => {
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
  router.post("/admin/publications/studentcorner", async (req, res) => {
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
  router.put("/admin/publications/studentcorner/:id", async (req, res) => {
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
  router.delete("/admin/publications/studentcorner/:id", async (req, res) => {
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
        data: results,
      });
    } catch (error) {
      console.error(error.message);
    }
  });