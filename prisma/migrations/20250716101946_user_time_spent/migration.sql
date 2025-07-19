/*
  Warnings:

  - You are about to drop the column `adId` on the `UserSectionTime` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,sectionId,date]` on the table `UserSectionTime` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_adId_fkey";

-- DropForeignKey
ALTER TABLE "UserSectionTime" DROP CONSTRAINT "UserSectionTime_sectionId_fkey";

-- DropIndex
DROP INDEX "UserSectionTime_userId_sectionId_date_adId_key";

-- AlterTable
ALTER TABLE "UserSectionTime" DROP COLUMN "adId",
ALTER COLUMN "sectionId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserSectionTime_userId_sectionId_date_key" ON "UserSectionTime"("userId", "sectionId", "date");

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
