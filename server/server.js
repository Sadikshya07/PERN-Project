const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(express.json());

app.use("/api/admin/publications/analysisreport", analysisreportRoute);
app.use("/api/admin/aboutus/management", managementRoute);
app.use("/api/admin/aboutus/faculty", facultyRoute);
app.use("/api/admin/aboutus/whydss",whydssRoute);
app.use("/api/admin/community/newsandevents",newsandeventsRoute);
app.use("/api/admin/otherpages/dssclubs",dssclubsRoute);
app.use("/api/admin/programs/dsscourses",dsscoursesRoute);
app.use("/api/admin/programs/courses",coursesRoute);
app.use("/api/admin/programs/weekendcampprogram",weekendcampprogramRoute);
app.use("/api/admin/dssinyear/booklist",booklistRoute);
app.use("/api/admin/dssinyear/calendar",calendarRoute);
app.use("/api/admin/publications/newsletter",newsletterRoute);
app.use("/api/admin/publications/analysisreport",analysisreportRoute);
app.use("/api/admin/publications/termsummary",termsummaryRoute);
app.use("/api/admin/publications/deerwalker",deerwalkerRoute);
app.use("/api/admin/publications/studentcorner",studentcornerRoute);
app.use("/api/admin/publications/podcast",podcastRoute);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
