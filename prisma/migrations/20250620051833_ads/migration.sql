/*
  Warnings:

  - The values [Active,Inactive] on the enum `AdStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `imageUrl` on the `Ad` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Ad` table. All the data in the column will be lost.
  - Added the required column `type` to the `Ad` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AdType" AS ENUM ('box', 'banner');

-- AlterEnum
BEGIN;
CREATE TYPE "AdStatus_new" AS ENUM ('active', 'inactive');
ALTER TABLE "Ad" ALTER COLUMN "status" TYPE "AdStatus_new" USING ("status"::text::"AdStatus_new");
ALTER TYPE "AdStatus" RENAME TO "AdStatus_old";
ALTER TYPE "AdStatus_new" RENAME TO "AdStatus";
DROP TYPE "AdStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "imageUrl",
DROP COLUMN "location",
ADD COLUMN     "bannerImage" TEXT,
ADD COLUMN     "boxImage" TEXT,
ADD COLUMN     "type" "AdType" NOT NULL;
