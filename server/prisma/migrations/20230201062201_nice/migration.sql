/*
  Warnings:

  - The primary key for the `analysisreport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `deerwalker` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `dssclub` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `dsscourse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `faculty` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `management` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `newsandevents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `newsletter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `schoolactivities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `schoolinmedia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `termsummary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `weekendcampprogram` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `whydss` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "analysisreport" DROP CONSTRAINT "analysisreport_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "analysisreport_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "analysisreport_id_seq";

-- AlterTable
ALTER TABLE "courses" DROP CONSTRAINT "courses_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "courses_id_seq";

-- AlterTable
ALTER TABLE "deerwalker" DROP CONSTRAINT "deerwalker_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "deerwalker_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "deerwalker_id_seq";

-- AlterTable
ALTER TABLE "dssclub" DROP CONSTRAINT "dssclub_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "dssclub_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "dssclub_id_seq";

-- AlterTable
ALTER TABLE "dsscourse" DROP CONSTRAINT "dsscourse_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "dsscourse_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "dsscourse_id_seq";

-- AlterTable
ALTER TABLE "faculty" DROP CONSTRAINT "faculty_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "faculty_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "faculty_id_seq";

-- AlterTable
ALTER TABLE "management" DROP CONSTRAINT "management_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "management_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "management_id_seq";

-- AlterTable
ALTER TABLE "newsandevents" DROP CONSTRAINT "newsandevents_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "newsandevents_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "newsandevents_id_seq";

-- AlterTable
ALTER TABLE "newsletter" DROP CONSTRAINT "newsletter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "newsletter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "newsletter_id_seq";

-- AlterTable
ALTER TABLE "schoolactivities" DROP CONSTRAINT "schoolactivities_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "schoolactivities_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "schoolactivities_id_seq";

-- AlterTable
ALTER TABLE "schoolinmedia" DROP CONSTRAINT "schoolinmedia_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "schoolinmedia_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "schoolinmedia_id_seq";

-- AlterTable
ALTER TABLE "termsummary" DROP CONSTRAINT "termsummary_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "termsummary_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "termsummary_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AlterTable
ALTER TABLE "weekendcampprogram" DROP CONSTRAINT "weekendcampprogram_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "weekendcampprogram_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "weekendcampprogram_id_seq";

-- AlterTable
ALTER TABLE "whydss" DROP CONSTRAINT "whydss_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "whydss_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "whydss_id_seq";
