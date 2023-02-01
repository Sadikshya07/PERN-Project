const express = require("express")
const router = express.Router()


router.get("/admin/publications/deerwalker", async (req, res) => {
    try {
      const results = await prisma.deerwalker.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/publications/deerwalker/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.deerwalker.findFirst({
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
  router.post("/admin/publications/deerwalker", async (req, res) => {
    try {
      console.log(req.body);
      const {name} = req.body;
      const data = {
        name:name
      };
      const results = await prisma.deerwalker.create({
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
  router.put("/admin/publications/deerwalker/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const {name} = req.body;
  
    const data = {
       name:name
    };
      const results = await prisma.deerwalker.update({
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
  router.delete("/admin/publications/deerwalker/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const {name} = req.body;
  
    const data = {
        name:name
    };
      const results = await prisma.deerwalker.delete({ 
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