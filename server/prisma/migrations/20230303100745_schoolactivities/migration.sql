/*
  Warnings:

  - You are about to drop the column `Title` on the `schoolactivities` table. All the data in the column will be lost.
  - Added the required column `Link` to the `schoolactivities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "schoolactivities" DROP COLUMN "Title",
ADD COLUMN     "Link" TEXT NOT NULL;
