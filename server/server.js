const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const managementRoute = require("./controllers/managementController");
const facultyRoute = require("./controllers/facultyController");
const whydssRoute = require("./controllers/whydssController");
const newsandeventsRoute = require("./controllers/newsandeventsController");
const dssclubsRoute = require("./controllers/dssclubsController");
const dsscoursesRoute = require("./controllers/dsscoursesController");
const coursesRoute = require("./controllers/coursesController");
const weekendcampprogramRoute = require("./controllers/weekendcampprogramController");
const booklistRoute = require("./controllers/booklistController");
const calendarRoute = require("./controllers/calendarController");
const newsletterRoute = require("./controllers/newsletterController");
const analysisreportRoute = require("./controllers/analysisreportController");
const termsummaryRoute = require("./controllers/termsummaryController");
const deerwalkerRoute = require("./controllers/deerwalkerController");
const studentcornerRoute = require("./controllers/studentcornerController");
const podcastRoute = require("./controllers/podcastController");
const metricsRoute = require("./controllers/metricsController");
const programsRoute = require("./controllers/programsController")
const schoolinmediaRoute = require("./controllers/schoolinmediaController")
const schoolactivitiesRoute = require("./controllers/schoolactivitiesController")
const addheroimagesRoute = require("./controllers/addheroimagesController")
const popupRoute = require("./controllers/popupController")

// app.use(express.json());

app.use("/api/admin/aboutus/management", managementRoute);
app.use("/api/admin/aboutus/faculty", facultyRoute);
app.use("/api/admin/aboutus/whydss",whydssRoute);
app.use("/api/admin/community/newsandevents",newsandeventsRoute);
app.use("/api/admin/otherpages/dssclubs",dssclubsRoute);
app.use("/api/admin/otherpages/popup",popupRoute);
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
app.use("/api/admin/home/metrics",metricsRoute);
app.use("/api/admin/home/programs",programsRoute);
app.use("/api/admin/home/schoolinmedia",schoolinmediaRoute);
app.use("/api/admin/home/schoolactivities",schoolactivitiesRoute);
app.use("/api/admin/home/addheroimages",addheroimagesRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
