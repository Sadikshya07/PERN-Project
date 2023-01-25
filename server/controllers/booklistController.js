const express = require("express")
const router = express.Router()


router.get("/admin/dssinyear/booklist", async (req, res) => {
    try {
      const results = await prisma.boooklist.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/dssinyear/booklist/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.booklist.findFirst({
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
  router.post("/admin/dssinyear/booklist", async (req, res) => {
    try {
      console.log(req.body);
      const {name,file } = req.body;
      const data = {
        name:name,
        file:file
      };
      const results = await prisma.booklist.create({
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
  router.put("/admin/dssinyear/booklist/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const {name,file } = req.body;
  
    const data = {
       name:name,
       file:file
    };
      const results = await prisma.booklist.update({
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
  router.delete("/admin/dssinyear/booklist/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const {name,file} = req.body;
  
    const data = {
        name:name,
        file:file
    };
      const results = await prisma.booklist.delete({ 
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