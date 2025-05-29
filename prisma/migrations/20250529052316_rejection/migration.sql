/*
  Warnings:

  - The `rejectionReason` column on the `GeneralPost` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rejectionReason` column on the `QuotePost` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "GeneralPost" ADD COLUMN     "acceptReason" TEXT,
DROP COLUMN "rejectionReason",
ADD COLUMN     "rejectionReason" TEXT[];

-- AlterTable
ALTER TABLE "QuotePost" ADD COLUMN     "acceptReason" TEXT,
DROP COLUMN "rejectionReason",
ADD COLUMN     "rejectionReason" TEXT[];
