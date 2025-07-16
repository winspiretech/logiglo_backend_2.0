/*
  Warnings:

  - You are about to drop the column `dangerousGoods` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `length` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `shipmentType` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `totalGrossWeight` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `totalNetWeight` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `transitInsurance` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `volumetricWeight` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `QuotePost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuotePost" DROP COLUMN "dangerousGoods",
DROP COLUMN "height",
DROP COLUMN "length",
DROP COLUMN "serviceType",
DROP COLUMN "shipmentType",
DROP COLUMN "totalGrossWeight",
DROP COLUMN "totalNetWeight",
DROP COLUMN "transitInsurance",
DROP COLUMN "volumetricWeight",
DROP COLUMN "width";
