/*
  Warnings:

  - Added the required column `department` to the `faculty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faculty" ADD COLUMN     "department" TEXT NOT NULL;
