/*
  Warnings:

  - You are about to drop the column `Image` on the `programs` table. All the data in the column will be lost.
  - Added the required column `elementryImage` to the `programs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `higherImage` to the `programs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleImage` to the `programs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "programs" DROP COLUMN "Image",
ADD COLUMN     "elementryImage" TEXT NOT NULL,
ADD COLUMN     "higherImage" TEXT NOT NULL,
ADD COLUMN     "middleImage" TEXT NOT NULL;
