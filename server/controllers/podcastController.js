const express = require("express")
const router = express.Router


router.get("/admin/publications/podcast", async (req, res) => {
    try {
      const results = await prisma.podcast.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/publications/podcast/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.podcast.findFirst({
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
  router.post("/admin/publications/podcast", async (req, res) => {
    try {
      console.log(req.body);
      const {presentername,rollnumber,grade,title,description} = req.body;
      const data = {
            presentername:presentername,
            rollnumber:rollnumber,
            grade:grade,
            title:title,
            description:description
      };
      const results = await prisma.podcast.create({
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
  router.put("/admin/publications/podcast/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const {presentername,rollnumber,grade,title,description} = req.body;
  
    const data = {
        presentername:presentername,
        rollnumber:rollnumber,
        grade:grade,
        title:title,
        description:description
    };
      const results = await prisma.podcast.update({
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
  router.delete("/admin/publications/podcast/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const {presentername,rollnumber,grade,title,description } = req.body;
  
    const data = {
        presentername:presentername,
        rollnumber:rollnumber,
        grade:grade,
        title:title,
        description:description
    };
      const results = await prisma.podcast.delete({ 
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