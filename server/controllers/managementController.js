const express = require("express")
const router = express.Router


router.get("/admin/aboutus/management", async (req, res) => {
    try {
      const results = await prisma.management.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/aboutus/management/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.management.findFirst({
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
  router.post("/admin/aboutus/management", async (req, res) => {
    try {
      console.log(req.body);
      const { name, description, position } = req.body;
      const data = {
        name: name,
        description: description,
        position: position,
      };
      const results = await prisma.management.create({
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
  router.put("/admin/aboutus/management/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description, position } = req.body;
  
    const data = {
      name: name,
      description: description,
      position: position,
    };
      const results = await prisma.management.update({
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
  router.delete("/admin/aboutus/management/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description, position } = req.body;
  
    const data = {
      name: name,
      description: description,
      position: position,
    };
      const results = await prisma.management.delete({ 
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