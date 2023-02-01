-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nebcourses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "nebcourses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsscourse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "dsscourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dssclub" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "dssclub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schoolactivities" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,

    CONSTRAINT "schoolactivities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publications" (
    "id" SERIAL NOT NULL,
    "Filename" TEXT NOT NULL,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentcorner" (
    "id" SERIAL NOT NULL,
    "studentname" TEXT NOT NULL,
    "rollnumber" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "articletitle" TEXT NOT NULL,
    "articlecontent" TEXT NOT NULL,

    CONSTRAINT "studentcorner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "podcast" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "presentername" TEXT NOT NULL,
    "rollno" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "podcast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsevents" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publishdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "newsevents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "management" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "management_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schoolinmedia" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "schoolinmedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekendcampname" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "weekendcampname_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "whydss" (
    "id" SERIAL NOT NULL,
    "bullets" TEXT NOT NULL,

    CONSTRAINT "whydss_pkey" PRIMARY KEY ("id")
);
