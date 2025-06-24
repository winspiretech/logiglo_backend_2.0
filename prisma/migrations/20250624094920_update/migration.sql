/*
  Warnings:

  - You are about to drop the column `verfied` on the `Otp` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Otp" DROP COLUMN "verfied",
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
