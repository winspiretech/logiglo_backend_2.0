/*
  Warnings:

  - Made the column `email` on table `CourseEnquiry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `message` on table `CourseEnquiry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CourseEnquiry" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "message" SET NOT NULL;
