-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addheroimages" (
    "id" TEXT NOT NULL,

    CONSTRAINT "addheroimages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metrics" (
    "id" TEXT NOT NULL,

    CONSTRAINT "metrics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programs" (
    "id" TEXT NOT NULL,

    CONSTRAINT "programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schoolactivities" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,

    CONSTRAINT "schoolactivities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schoolinmedia" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "schoolinmedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "management" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "management_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whydss" (
    "id" TEXT NOT NULL,
    "bullets" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "whydss_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsscourses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "dsscourses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekendcampprogram" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "weekendcampprogram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "termsummary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "termsummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deerwalker" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "deerwalker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysisreport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "analysisreport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentcorner" (
    "id" TEXT NOT NULL,
    "studentname" TEXT NOT NULL,
    "rollnumber" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "articletitle" TEXT NOT NULL,
    "articlecontent" TEXT NOT NULL,

    CONSTRAINT "studentcorner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "podcast" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "presentername" TEXT NOT NULL,
    "rollnumber" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "podcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booklist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "booklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendar" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lessonplan" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "lessonplan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dssclubs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "dssclubs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admission" (
    "id" TEXT NOT NULL,

    CONSTRAINT "admission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsandevents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publishdate" DATE NOT NULL,

    CONSTRAINT "newsandevents_pkey" PRIMARY KEY ("id")
);
