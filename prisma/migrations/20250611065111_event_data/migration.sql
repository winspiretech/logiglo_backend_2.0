/*
  Warnings:

  - Added the required column `brochure` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "brochure" TEXT NOT NULL,
ADD COLUMN     "videoUrl" TEXT NOT NULL;
