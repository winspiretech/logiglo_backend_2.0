-- AlterTable
ALTER TABLE "Otp" ADD COLUMN     "blockedUntil" TIMESTAMP(3),
ADD COLUMN     "resendCount" INTEGER NOT NULL DEFAULT 0;
