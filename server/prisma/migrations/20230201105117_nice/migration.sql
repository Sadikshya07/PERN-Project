/*
  Warnings:

  - You are about to drop the `dssclub` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "dssclub";

-- CreateTable
CREATE TABLE "dssclubs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "dssclubs_pkey" PRIMARY KEY ("id")
);
