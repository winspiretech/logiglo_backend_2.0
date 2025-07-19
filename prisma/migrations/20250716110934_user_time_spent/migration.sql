/*
  Warnings:

  - You are about to drop the column `sectionId` on the `UserSectionTime` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,date]` on the table `UserSectionTime` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_sectionId_fkey";

-- DropIndex
DROP INDEX "UserSectionTime_userId_sectionId_date_key";

-- AlterTable
ALTER TABLE "UserSectionTime" DROP COLUMN "sectionId";

-- CreateIndex
CREATE UNIQUE INDEX "UserSectionTime_userId_date_key" ON "UserSectionTime"("userId", "date");
