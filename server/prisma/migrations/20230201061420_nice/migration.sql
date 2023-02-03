/*
  Warnings:

  - You are about to drop the column `rollno` on the `podcast` table. All the data in the column will be lost.
  - You are about to drop the `nebcourses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `newsevents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `publications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `weekendcampname` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rollnumber` to the `podcast` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `whydss` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "podcast" DROP COLUMN "rollno",
ADD COLUMN     "rollnumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "whydss" ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "nebcourses";

-- DropTable
DROP TABLE "newsevents";

-- DropTable
DROP TABLE "publications";

-- DropTable
DROP TABLE "weekendcampname";

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsandevents" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publishdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "newsandevents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weekendcampprogram" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "weekendcampprogram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "newsletter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "termsummary" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "termsummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deerwalker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "deerwalker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysisreport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "analysisreport_pkey" PRIMARY KEY ("id")
);
