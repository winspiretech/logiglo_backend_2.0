/*
  Warnings:

  - Changed the type of `institutionType` on the `CourseEnquiry` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CourseEnquiry" DROP COLUMN "institutionType",
ADD COLUMN     "institutionType" TEXT NOT NULL;
