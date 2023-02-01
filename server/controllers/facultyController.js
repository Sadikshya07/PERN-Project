const express = require("express")
const router = express.Router()

router.get("/admin/aboutus/faculty", async (req, res) => {
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
  router.get("/admin/aboutus/faculty/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.faculty.findFirst({
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
  router.post("/admin/aboutus/faculty", async (req, res) => {
    try {
      console.log(req.body);
      const { name, description, department } = req.body;
      const data = {
        name: name,
        description: description,
        department : department
      };
      const results = await prisma.faculty.create({
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
  router.put("/admin/aboutus/faculty/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description, department } = req.body;
  
    const data = {
      name: name,
      description: description,
      department:department
    };
      const results = await prisma.faculty.update({
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
  router.delete("/admin/aboutus/faculty/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description, department } = req.body;
  
    const data = {
      name: name,
      description: description,
      department: department
    };
      const results = await prisma.faculty.delete({ 
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
  
  