/*
  Warnings:

  - You are about to drop the `admission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "admission";

-- CreateTable
CREATE TABLE "popup" (
    "id" TEXT NOT NULL,
    "Image" TEXT NOT NULL,

    CONSTRAINT "popup_pkey" PRIMARY KEY ("id")
);
