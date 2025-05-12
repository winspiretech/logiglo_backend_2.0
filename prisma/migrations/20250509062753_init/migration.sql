/*
  Warnings:

  - Made the column `userId` on table `QuotePost` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "QuotePost" DROP CONSTRAINT "QuotePost_userId_fkey";

-- AlterTable
ALTER TABLE "QuotePost" ADD COLUMN     "name" TEXT,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "totalNetWeight" DROP DEFAULT,
ALTER COLUMN "totalGrossWeight" DROP DEFAULT,
ALTER COLUMN "volumetricWeight" DROP DEFAULT,
ALTER COLUMN "transitInsurance" DROP DEFAULT,
ALTER COLUMN "width" DROP DEFAULT,
ALTER COLUMN "height" DROP DEFAULT,
ALTER COLUMN "length" DROP DEFAULT,
ALTER COLUMN "viewCount" DROP DEFAULT,
ALTER COLUMN "likesCount" DROP DEFAULT,
ALTER COLUMN "commentsCount" DROP DEFAULT,
ALTER COLUMN "dangerousGoods" DROP DEFAULT,
ALTER COLUMN "shipmentType" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "QuotePost" ADD CONSTRAINT "QuotePost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
