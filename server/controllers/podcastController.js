const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get("/", async (req, res) => {
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
  router.get("/:id", async (req, res) => {
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
  router.post("/", async (req, res) => {
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
  router.put("/:id", async (req, res) => {
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
      });
    } catch (error) {
      console.error(error.message);
    }
  });
  module.exports = router;