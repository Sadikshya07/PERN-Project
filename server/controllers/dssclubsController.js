const express = require("express")
const router = express.Router


router.get("/admin/otherpages/dssclubs", async (req, res) => {
    try {
      const results = await prisma.dssclubs.findMany();
      res.status(200).json({
        status: "success",
        data: results,
      });
    } catch (error) {
      console.log(error.message);
    }
  });
  router.get("/admin/otherpages/dssclubs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const results = await prisma.dssclubs.findFirst({
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
  router.post("/admin/otherpages/dssclubs", async (req, res) => {
    try {
      console.log(req.body);
      const { name, description } = req.body;
      const data = {
        name: name,
        description: description
      };
      const results = await prisma.dssclubs.create({
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
  router.put("/admin/otherpages/dssclubs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description} = req.body;
  
    const data = {
      name: name,
      description: description
    };
      const results = await prisma.dssclubs.update({
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
  router.delete("/admin/otherpages/dssclubs/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const { name, description} = req.body;
  
    const data = {
      name: name,
      description: description
    };
      const results = await prisma.dssclubs.delete({ 
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