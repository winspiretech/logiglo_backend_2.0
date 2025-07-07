/*
  Warnings:

  - You are about to drop the column `coverImage` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "coverImage",
ADD COLUMN     "coverImages" TEXT[];
