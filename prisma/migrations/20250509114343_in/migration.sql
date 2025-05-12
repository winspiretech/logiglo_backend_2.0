/*
  Warnings:

  - You are about to drop the column `postCategory` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `shipmentMode` on the `QuotePost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuotePost" DROP COLUMN "postCategory",
DROP COLUMN "shipmentMode",
ADD COLUMN     "postMainCategory" TEXT,
ADD COLUMN     "postSubCategory" TEXT;
