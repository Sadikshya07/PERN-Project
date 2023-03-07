/*
  Warnings:

  - Added the required column `Image` to the `addheroimages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Page` to the `addheroimages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addheroimages" ADD COLUMN     "Image" TEXT NOT NULL,
ADD COLUMN     "Page" TEXT NOT NULL;
