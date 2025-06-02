/*
  Warnings:

  - Added the required column `mode` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EventMode" AS ENUM ('offline', 'online', 'hybrid');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "mode" "EventMode" NOT NULL,
ALTER COLUMN "countryCode" DROP NOT NULL,
ALTER COLUMN "contactNumber" DROP NOT NULL,
ALTER COLUMN "emailAddress" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;
