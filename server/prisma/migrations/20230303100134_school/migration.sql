/*
  Warnings:

  - Added the required column `Image` to the `schoolinmedia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Link` to the `schoolinmedia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "schoolinmedia" ADD COLUMN     "Image" TEXT NOT NULL,
ADD COLUMN     "Link" TEXT NOT NULL;
