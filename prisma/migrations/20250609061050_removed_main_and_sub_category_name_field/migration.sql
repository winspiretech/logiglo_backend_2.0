/*
  Warnings:

  - You are about to drop the column `MainCategoryName` on the `GeneralPost` table. All the data in the column will be lost.
  - You are about to drop the column `SubCategoryName` on the `GeneralPost` table. All the data in the column will be lost.
  - You are about to drop the column `MainCategoryName` on the `QuotePost` table. All the data in the column will be lost.
  - You are about to drop the column `SubCategoryName` on the `QuotePost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GeneralPost" DROP COLUMN "MainCategoryName",
DROP COLUMN "SubCategoryName";

-- AlterTable
ALTER TABLE "QuotePost" DROP COLUMN "MainCategoryName",
DROP COLUMN "SubCategoryName";
