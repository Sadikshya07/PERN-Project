/*
  Warnings:

  - Added the required column `AreaofExpertise` to the `faculty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Experience` to the `faculty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faculty" ADD COLUMN     "AreaofExpertise" TEXT NOT NULL,
ADD COLUMN     "Experience" TEXT NOT NULL;
