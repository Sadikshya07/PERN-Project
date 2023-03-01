/*
  Warnings:

  - Added the required column `image1` to the `newsandevents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2` to the `newsandevents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newsandevents" ADD COLUMN     "image1" TEXT NOT NULL,
ADD COLUMN     "image2" TEXT NOT NULL;
