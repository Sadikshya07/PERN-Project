/*
  Warnings:

  - The primary key for the `podcast` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `studentcorner` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "podcast" DROP CONSTRAINT "podcast_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "podcast_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "podcast_id_seq";

-- AlterTable
ALTER TABLE "studentcorner" DROP CONSTRAINT "studentcorner_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "studentcorner_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "studentcorner_id_seq";

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
CREATE TABLE "admission" (
    "id" TEXT NOT NULL,

    CONSTRAINT "admission_pkey" PRIMARY KEY ("id")
);
