const express = require("express")
const router = express.Router()

router.get("/admin/dssinyear/calendar", async (req, res) => {
    try {
      const results = await prisma.calendar.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/dssinyear/calendar/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.calendar.findFirst({
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
  router.post("/admin/dssinyear/calendar", async (req, res) => {
    try {
      console.log(req.body);
      const { title } = req.body;
      const data = {
       title:title,
      };
      const results = await prisma.calendar.create({
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
  router.put("/admin/dssinyear/calendar/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { title } = req.body;
  
    const data = {
        title:title,
    };
      const results = await prisma.calendar.update({
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
  router.delete("/admin/dssinyear/calendar/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { title } = req.body;
  
    const data = {
       title:title
    };
      const results = await prisma.calendar.delete({ 
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