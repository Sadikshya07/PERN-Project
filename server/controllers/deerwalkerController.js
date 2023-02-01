const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get("/", async (req, res) => {
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
  router.get("/:id", async (req, res) => {
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
  router.post("/", async (req, res) => {
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
  router.put("/:id", async (req, res) => {
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
      });
    } catch (error) {
      console.error(error.message);
    }
  });
  module.exports = router;