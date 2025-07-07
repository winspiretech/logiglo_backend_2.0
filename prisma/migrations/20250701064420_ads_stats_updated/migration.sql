/*
  Warnings:

  - A unique constraint covering the columns `[adId,date,sectionId,subSectionId]` on the table `AdStat` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "AdStat_adId_date_sectionId_key";

-- AlterTable
ALTER TABLE "AdStat" ADD COLUMN     "subSectionId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "AdStat_adId_date_sectionId_subSectionId_key" ON "AdStat"("adId", "date", "sectionId", "subSectionId");

-- AddForeignKey
ALTER TABLE "AdStat" ADD CONSTRAINT "AdStat_subSectionId_fkey" FOREIGN KEY ("subSectionId") REFERENCES "SubSection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
