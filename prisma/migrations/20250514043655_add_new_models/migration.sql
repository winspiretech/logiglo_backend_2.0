/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseModule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CourseQuery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_createdById_fkey";

-- DropForeignKey
ALTER TABLE "CourseModule" DROP CONSTRAINT "CourseModule_courseId_fkey";

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "CourseModule";

-- DropTable
DROP TABLE "CourseQuery";

-- DropEnum
DROP TYPE "CourseDifficulty";

-- DropEnum
DROP TYPE "CourseMode";

-- DropEnum
DROP TYPE "CourseStatus";

-- DropEnum
DROP TYPE "Currency";

-- DropEnum
DROP TYPE "EducationLevel";

-- DropEnum
DROP TYPE "InstitutionType";
