/*
  Warnings:

  - You are about to drop the column `section` on the `Ad` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `AdStat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[adId,date,sectionId]` on the table `AdStat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sectionId` to the `AdStat` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AdStat_adId_date_category_key";

-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "section";

-- AlterTable
ALTER TABLE "AdStat" DROP COLUMN "category",
ADD COLUMN     "sectionId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "AdsSection";

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdSections" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdSections_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Section_name_key" ON "Section"("name");

-- CreateIndex
CREATE INDEX "_AdSections_B_index" ON "_AdSections"("B");

-- CreateIndex
CREATE UNIQUE INDEX "AdStat_adId_date_sectionId_key" ON "AdStat"("adId", "date", "sectionId");

-- AddForeignKey
ALTER TABLE "AdStat" ADD CONSTRAINT "AdStat_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdSections" ADD CONSTRAINT "_AdSections_A_fkey" FOREIGN KEY ("A") REFERENCES "Ad"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdSections" ADD CONSTRAINT "_AdSections_B_fkey" FOREIGN KEY ("B") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
