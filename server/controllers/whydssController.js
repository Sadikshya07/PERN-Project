const express = require("express")
const router = express.Router()

router.get("/admin/aboutus/whydss", async (req, res) => {
    try {
      const results = await prisma.whydss.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/aboutus/whydss/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.whydss.findFirst({
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
  router.post("/admin/aboutus/whydss", async (req, res) => {
    try {
      console.log(req.body);
      const { category,bullets } = req.body;
      const data = {
       category:category,
       bullets:bullets
      };
      const results = await prisma.whydss.create({
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
  router.put("/admin/aboutus/whydss/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { category,bullets } = req.body;
  
    const data = {
        category:category,
        bullets:bullets
    };
      const results = await prisma.whydss.update({
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
  router.delete("/admin/aboutus/whydss/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { category,bullets } = req.body;
  
    const data = {
        category:category,
        bullets:bullets
    };
      const results = await prisma.whydss.delete({ 
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