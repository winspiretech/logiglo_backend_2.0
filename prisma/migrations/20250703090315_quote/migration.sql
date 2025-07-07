/*
  Warnings:

  - You are about to drop the column `description` on the `QuoteReply` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuoteReply" DROP COLUMN "description",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "quotePrice" DOUBLE PRECISION;
