/*
  Warnings:

  - Added the required column `image` to the `addheroimages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `analysisreport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `analysisreport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `deerwalker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `deerwalker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `newsletter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `newsletter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `podcast` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `podcast` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `studentcorner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `studentcorner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `termsummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `termsummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addheroimages" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "analysisreport" ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "deerwalker" ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "newsletter" ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "podcast" ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "studentcorner" ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "termsummary" ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
