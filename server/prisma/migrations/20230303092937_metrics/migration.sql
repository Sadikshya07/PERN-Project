/*
  Warnings:

  - Added the required column `StudentTeacherRatio` to the `metrics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Students` to the `metrics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StudentsPerClass` to the `metrics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Teachers` to the `metrics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "metrics" ADD COLUMN     "StudentTeacherRatio" TEXT NOT NULL,
ADD COLUMN     "Students" TEXT NOT NULL,
ADD COLUMN     "StudentsPerClass" TEXT NOT NULL,
ADD COLUMN     "Teachers" TEXT NOT NULL;
