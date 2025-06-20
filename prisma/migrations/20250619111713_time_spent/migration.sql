/*
  Warnings:

  - You are about to drop the column `blogId` on the `UserSectionTime` table. All the data in the column will be lost.
  - You are about to drop the column `courseId` on the `UserSectionTime` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `UserSectionTime` table. All the data in the column will be lost.
  - You are about to drop the column `forumId` on the `UserSectionTime` table. All the data in the column will be lost.
  - You are about to drop the column `quoteId` on the `UserSectionTime` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,sectionId,date,referenceId,referenceType]` on the table `UserSectionTime` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `referenceId` to the `UserSectionTime` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referenceType` to the `UserSectionTime` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('BLOG', 'COURSE', 'EVENT', 'QUOTE', 'FORUM');

-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_blogId_fkey";

-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_courseId_fkey";

-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_forumId_fkey";

-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_quoteId_fkey";

-- DropIndex
DROP INDEX "UserSectionTime_userId_sectionId_date_blogId_courseId_event_key";

-- AlterTable
ALTER TABLE "UserSectionTime" DROP COLUMN "blogId",
DROP COLUMN "courseId",
DROP COLUMN "eventId",
DROP COLUMN "forumId",
DROP COLUMN "quoteId",
ADD COLUMN     "referenceId" TEXT NOT NULL,
ADD COLUMN     "referenceType" "ContentType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserSectionTime_userId_sectionId_date_referenceId_reference_key" ON "UserSectionTime"("userId", "sectionId", "date", "referenceId", "referenceType");
