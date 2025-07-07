/*
  Warnings:

  - You are about to drop the column `referenceId` on the `UserSectionTime` table. All the data in the column will be lost.
  - You are about to drop the column `referenceType` on the `UserSectionTime` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,sectionId,date,adId]` on the table `UserSectionTime` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adId` to the `UserSectionTime` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserSectionTime_userId_sectionId_date_referenceId_reference_key";

-- AlterTable
ALTER TABLE "UserSectionTime" DROP COLUMN "referenceId",
DROP COLUMN "referenceType",
ADD COLUMN     "adId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ContentType";

-- CreateIndex
CREATE UNIQUE INDEX "UserSectionTime_userId_sectionId_date_adId_key" ON "UserSectionTime"("userId", "sectionId", "date", "adId");

-- AddForeignKey
ALTER TABLE "UserSectionTime" ADD CONSTRAINT "UserSectionTime_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
