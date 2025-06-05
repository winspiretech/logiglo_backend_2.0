/*
  Warnings:

  - Made the column `website` on table `CourseEnquiry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CourseEnquiry" ADD COLUMN     "email" TEXT,
ADD COLUMN     "message" TEXT,
ALTER COLUMN "website" SET NOT NULL;
