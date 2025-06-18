/*
  Warnings:

  - You are about to drop the column `optCode` on the `Otp` table. All the data in the column will be lost.
  - Added the required column `otpCode` to the `Otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Otp" DROP COLUMN "optCode",
ADD COLUMN     "otpCode" TEXT NOT NULL;
