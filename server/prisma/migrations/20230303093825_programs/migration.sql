/*
  Warnings:

  - Added the required column `Image` to the `programs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "programs" ADD COLUMN     "Image" TEXT NOT NULL;
