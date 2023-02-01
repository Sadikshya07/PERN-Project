/*
  Warnings:

  - You are about to drop the `dsscourse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "dsscourse";

-- CreateTable
CREATE TABLE "dsscourses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "dsscourses_pkey" PRIMARY KEY ("id")
);
